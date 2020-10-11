import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #f69335;
  color: white;
  height: 6vh;
  padding-left: 1rem;
  text-decoration: none;
`
const Catagories = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  font-size: 20px;
`
const ListCatagories = styled.li`
  padding: 13px;
  text-decoration: none;
  color: white;
  transition: background-color .5s;

  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    padding: 13.5px;
    text-decoration: none;
    background-color: #43847C;
    color: white;
    transition: background-color .5s;
  }
`

function MinorNavbar () {
  return (
    <>
      <Container>
        <Catagories>
          <ListCatagories>
            <Link to='/'>Home</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/action'>Action</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/adventure'>Adventure</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/rpg'>RPG</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/simulation'>Simulation</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/strategy'>Strategy</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/sport'>Sport</Link>
          </ListCatagories>
        </Catagories>
      </Container>
    </>
  )
}

export default MinorNavbar
