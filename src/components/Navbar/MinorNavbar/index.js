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
  display: flex;
  justify-content: center;
  width: auto;
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

          <ListHomeCatagories><Link Link to='/'><HomeIcon1 /></Link></ListHomeCatagories>

          <ListCatagories><Link to='/catagories/action'>Action</Link></ListCatagories>

          <ListCatagories><Link to='/catagories/adventure'>Adventure</Link></ListCatagories>

          <ListCatagories><Link to='/catagories/rpg'>RPG</Link></ListCatagories>

          <ListCatagories><Link to='/catagories/simulation'>Simulation</Link></ListCatagories>

          <ListCatagories><Link to='/catagories/strategy'>Strategy</Link></ListCatagories>

          <ListCatagories><Link to='/catagories/sport'> Sport</Link></ListCatagories>

        </Catagories>
      </Container>
    </>
  )
}

export default MinorNavbar
