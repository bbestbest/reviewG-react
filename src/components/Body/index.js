import React from 'react'
import styled from 'styled-components'
import SlideShow from './SlideShow'
import TopReviews from './TopReviews'
import NewsBody from '../News/NewsBody'

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const ContentContainer = styled.div`
  width: auto;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`

function Body ({ children }) {
  return (
    <>
      <Container>
        <ContentContainer>
          <SlideShow />
          <TopReviews />
          <NewsBody> Lastest </NewsBody>
        </ContentContainer>
      </Container>
    </>
  )
}
export default Body
