import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { fetchLogin, fetchLoginAdmin } from '../../services/fetchData'
import styled from 'styled-components'
import AuthContext, { CurrentUser } from '../../contexts/AuthContext'
import ImageIcon from '../../assets/hhh.png'

const Container = styled.div`
   background: #003d59;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 89vh;
`

const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 65%;
`
const Image = styled.div`
  background-image: url(${ImageIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  align-items: center;
  width: 600px;
  height: 500px;
  margin-right: 3.5rem;
`

const BoxImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Signs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 2rem;
  width: 80%;
  height: 100%;
  padding: 3rem;
  
`

const Head = styled.div`
  padding: 3rem;
  font-size: 40px;
  color: #f04823;
`

const ButtonInput = styled.input`
  width: 75%;
  height: 2rem;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 15px;
  margin: 1rem;
  padding: 5px 10px 5px 10px;
  color: #f04823;
  &::placeholder {
    color: #f04823;
  }
`
const ButtonSubmit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
    width: 80%;
    height: 3rem;
  /* padding: 5px 10px 5px 10px; */
  margin-top: 3rem;
  background-color: #f04823;
  border: 2px solid #f04823;
  color: white;
  border-radius: 5px;
  transition: background-color 0.5s;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
    cursor: pointer;
  }
  &:active {
    background-color: #d03416;
  }
`

function Sign ({ children }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [loginSuccess, setLoginSucess] = useState(false)
  const { setIsLogin, setGlobalUsername, setUsernameId, setIsToken, setIsAdmin } = useContext(AuthContext)

  const handleOnUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handleOnPasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleOnSubmit = async () => {
    const data = await fetchLogin(username, password, token).then(response => response.data.access_token)
    const dataAdmin = await fetchLoginAdmin(username, password).then(response => response.data.user)
    if (username !== null && password !== null && data !== undefined) {
      alert('Login Success')
      setIsLogin(true)
      await fetchLogin(username, password, token).then(response => setToken(response.data.access_token.token))
      await fetchLogin(username, password, token).then(response => setUsernameId(response.data.user.user_id))
      setLoginSucess(true)
      setIsToken(token)
      setIsAdmin(false)
      setGlobalUsername(username)
    } else if (username !== null && password !== null && dataAdmin !== undefined) {
      alert('Login Success | Admin')
      setIsLogin(true)
      await fetchLoginAdmin(username, password, token).then(response => setUsernameId(response.data.user.admin_id))
      setIsAdmin(true)
      setLoginSucess(true)
      setGlobalUsername(username)
    } else {
      alert('Username or Password is incorrect')
    }
  }
  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      handleOnSubmit()
    }
  }

  return (
    <>
      <CurrentUser>
        <Container>
          <SignContainer>
            <BoxImage>
              <Image src={ImageIcon} />
            </BoxImage>
            <Signs>
              <Head> {children} </Head>
              <ButtonInput type='text' name='username' placeholder=' Username... ' value={username} onChange={handleOnUsernameChange} onKeyDown={handleKeyPress} />
              <ButtonInput type='password' name='password' placeholder=' Password... ' value={password} onChange={handleOnPasswordChange} onKeyDown={handleKeyPress} />
              {!loginSuccess ? (<ButtonSubmit type='submit' onClick={handleOnSubmit}>Submit</ButtonSubmit>) : <Redirect to='/' />}
            </Signs>
          </SignContainer>
        </Container>
      </CurrentUser>
    </>
  )
}
export default Sign
