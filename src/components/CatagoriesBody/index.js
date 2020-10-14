import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* background: #003d59; */
  background-color: white;
  width: 100vw;
  height: 100vh;
`
const TopicContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* background: rgba(172, 149, 149, 0.911); */
  width: 100%;
  height: 10rem;
`
const Text = styled.div`
  font-size: 4rem;
  color: orange;
  margin-left: 2rem;
`

function CatagoriesBody ({ children }) {
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
export default CatagoriesBody
