/* global fetch */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  display:flex;
  justify-content: center;
  background-image: url(${ImageIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  width: 600px;
  height: 500px;
  margin-right: 3.5rem;
`

const BoxImage = styled.div`
  display: flex;
  /* justify-content: center; */
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
  height: auto;
  padding: 3rem;
`

const Head = styled.div`
  margin-top: 2rem;
  padding: 1rem;
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
const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
    width: 80%;
    height: 3rem;
  padding: 5px 15px 5px 10px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: #f04823;
  border: 2px solid #f04823;
  color: white;
  border-radius: 5px;
  transition: background-color 0.5s;
  cursor: pointer;
  button {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
  }
`

function Sign ({ children }) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState('')

  const handleChangeEmail = event => setEmail(event.target.value)
  const handleChangeUsername = event => setUsername(event.target.value)
  const handleChangePassword = event => setPassword(event.target.value)
  const handleChangeDisplay = event => setDisplay(event.target.value)

  const onSubmit = () => {
    const userOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        display_name: display
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/users', userOptions)
      .then(response => response.json())
      .then(response => console.log(response))
  }
  return (
    <>
      <from>
        <Container>
          <SignContainer>
            <BoxImage>
              <Link to='/'><Image src={ImageIcon} /></Link>
            </BoxImage>
            <Signs>
              <Head> {children} </Head>
              <ButtonInput
                onChange={handleChangeEmail}
                placeholder=' Email ... '
              />
              <ButtonInput
                onChange={handleChangeUsername}
                placeholder=' Username... '
              />
              <ButtonInput
                onChange={handleChangePassword}
                type='password'
                placeholder=' Password... '
              />
              <ButtonInput
                onChange={handleChangeDisplay}
                placeholder=' Display... '
              />
              <ButtonSubmit onClick={onSubmit}>Submit</ButtonSubmit>
            </Signs>
          </SignContainer>
        </Container>
      </from>
    </>
  )
}
export default Sign
