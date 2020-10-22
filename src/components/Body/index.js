import React from 'react'
import styled from 'styled-components'
import SlideShow from '../SlideShow'
import TopReviews from './TopReviews'
import NewsBody from '../News/NewsBody'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: initial;
`

const ContentContainer = styled.div`
  width: auto;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const SlideShowContainer = styled.div`
  width: 100%;
  height: 49vh;
`

function Body ({ children }) {
  return (
    <>
      <Container>
        <ContentContainer>
          {/* <WelcomeContainer /> */}
          <SlideShowContainer>
            <SlideShow />
          </SlideShowContainer>
          <TopReviews />
          <NewsBody> Lastest </NewsBody>
        </ContentContainer>
      </Container>
    </>
  )
}
export default Body
