import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withBaseIcon } from 'react-icons-kit'
// import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #f69335;
  color: white;
  /* height: 6vh; */
  height: auto;
  width: auto;
  padding-left: 2.5rem;
  text-decoration: none;
`
const Catagories = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  flex: 1rem;
`

const ListCatagories = styled.a`
  font-size: 20px;
  display: flex;
  padding: 18px;
  color: white;
  transition: background-color 0.5s;
    a:focus{
    border-bottom: none;
    }

  a:visited {
    border-bottom: none;
    text-decoration: none;
  }
  a:link {
    border-bottom: none;
    text-decoration: none;
  }
  &:hover {
    padding: 18px;
    text-decoration: none;
    background-color: #43847c;
    color: white;
    transition: background-color 0.8s;
  }
`

const ListHomeCatagories = styled.li`
  display: flex;
  justify-content: center;
  width: 5vh;
  font-size: 20px;
  padding: 18px;
  text-decoration: none;
  color: white;
  background-color: #f69335;
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
    background-color: #43847c;
    color: white;
    transition: background-color 0.8s;
  }
`
const SideIconContainer = withBaseIcon({
  size: '19.5px',
  style: { color: '#FFFFFF ' }
})

export const HomeIcon1 = () => <SideIconContainer icon={home} />

function MinorNavbar () {
  return (
    <>
      <Container>
        <Catagories>

          <Link Link to='/'> <ListHomeCatagories><HomeIcon1 /></ListHomeCatagories></Link>

          <Link to='/catagories/action'><ListCatagories>Action</ListCatagories></Link>

          <Link to='/catagories/adventure'><ListCatagories>Adventure</ListCatagories></Link>

          <Link to='/catagories/rpg'><ListCatagories>RPG</ListCatagories></Link>

          <Link to='/catagories/simulation'><ListCatagories>Simulation</ListCatagories></Link>

          <Link to='/catagories/strategy'><ListCatagories>Strategy</ListCatagories></Link>

          <Link to='/catagories/sport'> <ListCatagories>Sport</ListCatagories></Link>

        </Catagories>
      </Container>
    </>
  )
}

export default MinorNavbar
