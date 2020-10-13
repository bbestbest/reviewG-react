import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background: #003d59;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 65%;
`
const Image = styled.div`
  /* background-color: #D1C5C2; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SignInContainer = styled.div`
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
  width: 75%;
  height: 2rem;
  padding: 5px 10px 5px 10px;
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
  }
`
const Register = styled.a`
  color: #f04823;
  font-size: 15px;
  padding-top: 10px;
  color: inherit;
  text-decoration: none;
`

function Login () {
  return (
    <>
      <Container>
        <LoginContainer>
          <Image> Image </Image>
          <SignInContainer>
            <Head> Login </Head>
            <ButtonInput placeholder=' Username... ' />
            <ButtonInput placeholder=' Password... ' />
            <ButtonSubmit>
              <Link to='/'>Submit</Link>
            </ButtonSubmit>
            <Register>
              <Link to='/Register'> Create new account </Link>
            </Register>
          </SignInContainer>
        </LoginContainer>
      </Container>
    </>
  )
}
export default Login
