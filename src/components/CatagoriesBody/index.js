import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #003d59;
  padding: 2rem 0 2rem 0;
  width: 100%;
`
const BodyContainer = styled.div`
  display:flex;
  flex-direction: column;
  background: white;
  width: 90%;
  height: 80vh;
  border-radius: 2rem;
  padding: 2rem;
`

const HeadLineContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem 0 2rem;
  width: auto;
  height: 7rem;
  border-radius: 2rem;
  background-color: #f69335;
  margin-bottom: 2rem;
`

const MainHeadLine = styled.span`
  width: 100%;
  padding-bottom: 6px;
  border-bottom: 5px solid white;
  font-size: 50px;
  color: white;
`

const MinorHeadLine = styled.span`
  margin: 1rem 3rem 1rem 3rem;
  width: auto;
  padding-bottom: 5px;
  border-bottom: 3px solid #003d59;
  font-size: 40px;
  color: #003d59;
`

function BodyCategories ({ children }) {
  return (
    <>
      <Container>
        <BodyContainer>
          <HeadLineContainer>
            <MainHeadLine> {children} </MainHeadLine>
          </HeadLineContainer>
          <MinorHeadLine> Review-G </MinorHeadLine>
        </BodyContainer>
      </Container>
    </>
  )
}

export default BodyCategories
