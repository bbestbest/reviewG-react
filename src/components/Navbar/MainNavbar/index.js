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
  transition: background-color 0.5s;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const SignButton = styled.a`

  display: flex;
  justify-content: center;
  width: auto;
  font-size: 14px;
  padding: 18px;
  text-decoration: none;
  color: white;
  background-color: #f04823;
  transition: background-color 0.5s;
  outline: none;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    border-bottom: none;
    text-decoration: none;
  }
  &:hover {
    padding: 18px;
    text-decoration: none;
    background-color: #d04527;
    color: white;
    transition: background-color 0.8s;
  }
`
const UsernameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.8rem;
  background-color: transparent;
  text-decoration: none;
`

const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  align-items: center;
  text-align: center;
  background: #f04823;
  background-color: transparent;
  text-decoration: none;
  color: white;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    /* padding: 10px; */
    cursor: pointer;
    text-decoration: none;
    background-color: #d04527;
    color: white;
    transition: background-color 0.8s;
  }
`

function MainNavbar () {
  // const [isLogin] = useCurrentUser()
  // const [username] = useCurrentUser()
  const { isAdmin, setIsAdmin, isLogin, setIsLogin, globalUsername, setGlobalUsername } = useContext(AuthContext)

  // useEffect(() => {
  //   setIsLogin(true)
  // })

  const handleOnLogout = () => {
    setIsLogin(false)
    setGlobalUsername(null)
    setIsAdmin(false)
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
          {isAdmin ? (<><LogoutButton><Link to='/admin_post'>POST</Link></LogoutButton></>) : (<></>)}{!isLogin ? (<><SignButton><Link to='/register'>Sign Up</Link></SignButton><SignButton><Link to='/login'>Sign In</Link></SignButton></>) : <><UsernameContainer>{globalUsername}</UsernameContainer><LogoutButton onClick={handleOnLogout}>Logout</LogoutButton></>}
        </Container>
      </CurrentUser>
    </>
  )
}

export default MainNavbar
