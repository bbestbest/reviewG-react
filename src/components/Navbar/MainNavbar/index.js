import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext, { CurrentUser } from '../../../contexts/AuthContext'

// import './index.css'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f04823;
  color: white;
  height: auto;
  width: auto;
  margin-bottom: auto;
  position: relative;
  font-size: 15px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 1rem;
  padding-left: 2rem;
  height: auto;
  width: auto;
  font-size: 20px;
  background-color: #f04823;
  text-decoration: none;
  color: white;
  transition: background-color .5s;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`

const SignButton = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.8rem;
  background: #f04823;
  /* background-color: transparent; */
  text-decoration: none;
  color: white;
  transition: background-color .8s;
  a {
    color: inherit;
    text-decoration: none;
  }  
    &:hover {
    /* padding: 10px; */
    text-decoration: none;
    background-color: #D04527;
    color: white;
    transition: background-color .8s;
  }
`
const UsernameContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: transparent;
  text-decoration: none;
`

const LogoutButton = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  text-align: center;
  background: #f04823;
  background-color: transparent;
  text-decoration: none;
  color: white;
  a {
    color: inherit;
    text-decoration: none;
  }  
    &:hover {
    /* padding: 10px; */
    text-decoration: none;
    background-color: #D04527;
    color: white;
    transition: background-color .8s;
  }
`

function MainNavbar () {
  // const [isLogin] = useCurrentUser()
  // const [username] = useCurrentUser()
  const { isLogin, setIsLogin, globalUsername, setGlobalUsername } = useContext(AuthContext)

  // useEffect(() => {
  //   setIsLogin(true)
  // })

  const handleOnLogout = () => {
    setIsLogin(false)
    setGlobalUsername(null)
    window.localStorage.setItem('Login', JSON.stringify(false))
    window.localStorage.setItem('Username', JSON.stringify(''))
    window.localStorage.setItem('Token', JSON.stringify(''))
    window.localStorage.setItem('UserId', JSON.stringify(0))
    window.localStorage.setItem('Admin', JSON.stringify(false))
  }

  return (
    <>
      <CurrentUser>
        <Container>
          <Logo>
            <Link to='/'>review-G</Link>
          </Logo>
          {/* <SignButton><Link to='/register'>Sign Up</Link></SignButton><SignButton><Link to='/login'>Sign In</Link></SignButton> */}
          {!isLogin ? (<><SignButton><Link to='/register'>Sign Up</Link></SignButton><SignButton><Link to='/login'>Sign In</Link></SignButton></>) : <><UsernameContainer>{globalUsername}</UsernameContainer><LogoutButton onClick={handleOnLogout}>Logout</LogoutButton></>}
        </Container>
      </CurrentUser>
    </>
  )
}

export default MainNavbar
