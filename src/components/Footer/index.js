import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f04823;
  color: wheat;
  height: 6vh;
  padding-left: 1rem;
`

function Footer () {
  return (
    <>
      <Container>
        © 2020 Review-G All Rights Reserved
      </Container>
    </>
  )
}
export default Footer
