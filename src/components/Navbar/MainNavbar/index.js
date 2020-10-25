import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import './index.css'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f04823;
  color: white;
  height: auto;
  width: auto;
  margin-bottom: auto;
  padding-right: 2rem;
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  /* background: #f04823; */
  background-color: transparent;
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

function MainNavbar () {
  return (
    <>
      <Container>
        <Logo>
          <Link to='/'>review-G</Link>
        </Logo>
        <SignButton>
          <Link to='/register'>Sign Up</Link>
        </SignButton>
        <SignButton>
          <Link to='/login'>Sign In</Link>
        </SignButton>
      </Container>
    </>
  )
}

export default MainNavbar
