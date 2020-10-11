import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #003d59;
  width: 100vw;
  height: 83vh;
`
const TopicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(172, 149, 149, 0.911);
  width: 100%;
  height: 20rem;
`
const Text = styled.div`
  font-size: 4rem;
  color: white;
`

function Body ({ children }) {
  return (
    <>
      <Container>
        <TopicContainer>
          <Text>{children}</Text>
        </TopicContainer>
      </Container>
    </>
  )
}
export default Body
