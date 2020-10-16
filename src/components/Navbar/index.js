import React from 'react'
import MainNavbar from './MainNavbar'
import MinorNavbar from './MinorNavbar'
import styled from 'styled-components'

const Container = styled.div`
  top: 0;
  position: relative;
  z-index: 10000;
`

function Navbar () {
  return (
    <>
      <Container>
        <MainNavbar />
        <MinorNavbar />
      </Container>
    </>
  )
}

export default Navbar
