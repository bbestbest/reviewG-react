import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../BackgroundBlock'
import backgroundImage1 from '../../assets/cyberpunk.jpg'
import backgroundImage2 from '../../assets/Souls.jpg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: white; */
  background-color: #003d59;
  /* overflow: hidden; */
  position: initial;
`

const ContentContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

// const WelcomeContainer = styled.div`
//   width: 100%;
//   height: 25vh;
//   background-color: red;
// `

const SlideShowContainer = styled.div`
  width: 75%;
  height: 45vh;
  background-color: orange;
`

const TopReviewsContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
`
const TopReviewsInsideContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: brown;
display: flex;
  flex-direction: row;
`
const TopReviews = styled.div`
  height: 100%;
  width: 24%;
  margin: 0 2%;
  overflow: hidden;
`

const BodyContainer = styled.div`
  width: 90%;
  height: 200vh;
  display: flex;
  background-color: white;
  margin: inherit;
  border-radius: 5rem;
  `

function Body ({ children }) {
  return (
    <>
      <Container>
        <ContentContainer>
          {/* <WelcomeContainer /> */}
          <SlideShowContainer />
          <TopReviewsContainer>
            <TopReviewsInsideContainer>
              <TopReviews>
                <BackgroundBlock src={backgroundImage1} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage2} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage1} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage2} height='50' />
              </TopReviews>
            </TopReviewsInsideContainer>
          </TopReviewsContainer>
          <BodyContainer />
        </ContentContainer>
      </Container>
    </>
  )
}
export default Body
