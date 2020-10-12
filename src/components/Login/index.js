import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #003d59;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 83vh;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: white;
`

function Login () {
  return (
    <>
      <Container>
        <LoginContainer />
      </Container>
    </>
  )
}

export default Login 