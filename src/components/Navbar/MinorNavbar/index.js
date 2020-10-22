import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #f69335;
  color: white;
  /* height: 6vh; */
  height: auto;
  width: auto;
  padding-left: 1rem;
  text-decoration: none;
`
const Catagories = styled.div`
  display: flex;
  list-style-type: none;
  align-items: center;
  font-size: 20px;
  flex: 1rem;
`
const ListCatagories = styled.li`
  display: flex;
  padding: 14px;
  text-decoration: none;
  color: white;
  transition: background-color .5s;

  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    padding: 13.9px;
    text-decoration: none;
    background-color: #43847C;
    color: white;
    transition: background-color .8s;
  }
`

function MinorNavbar () {
  const handleOnClick = (value) => {

  }

  return (
    <>
      <Container>
        <Catagories>
          <ListCatagories>
            <Link to='/'>Home</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/action' onClick={() => handleOnClick('action')}>Action</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/adventure' onClick={() => handleOnClick('adventure')}>Adventure</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/rpg' onClick={() => handleOnClick('rpg')}>RPG</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/simulation' onClick={() => handleOnClick('simulation')}>Simulation</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/strategy' onClick={() => handleOnClick('strategy')}>Strategy</Link>
          </ListCatagories>
          <ListCatagories>
            <Link to='/sport' onClick={() => handleOnClick('sport')}>Sport</Link>
          </ListCatagories>
          {/* <ListCatagories>
            <Link to='/'>Other</Link>
          </ListCatagories> */}
        </Catagories>
      </Container>
    </>
  )
}

export default MinorNavbar
