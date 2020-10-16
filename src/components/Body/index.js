import React from 'react'
import styled from 'styled-components'
import SlideShow from '../SlideShow'
import CategoriesBody from '../CatagoriesBody'
import BackgroundBlock from '../BackgroundBlock'
import backgroundImage1 from '../../assets/cyberpunk.jpg'
import backgroundImage2 from '../../assets/Souls.jpg'
import backgroundImage3 from '../../assets/callofd.jpg'
import backgroundImage4 from '../../assets/mario.jpg'

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

const TopReviewsContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  padding: 1rem;
`
const TopReviewsInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: brown; */
  display: flex;
  flex-direction: row;
`
const TopReviews = styled.div`
  height: 100%;
  width: 30%;
  margin: 0 0.5%;
  overflow: hidden;
  border-radius: 10px;
`

// const BodyContainer = styled.div`
//   width: 90%;
//   height: 200vh;
//   display: flex;
//   background-color: white;
//   margin: inherit;
//   border-radius: 5rem;
// `

function Body ({ children }) {
  return (
    <>
      <Container>
        <ContentContainer>
          {/* <WelcomeContainer /> */}
          <SlideShowContainer>
            <SlideShow />
          </SlideShowContainer>
          <TopReviewsContainer>
            <TopReviewsInsideContainer>
              <TopReviews>
                <BackgroundBlock src={backgroundImage1} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage2} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage4} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage4} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage1} height='50' />
              </TopReviews>
              <TopReviews>
                <BackgroundBlock src={backgroundImage2} height='50' />
              </TopReviews>
            </TopReviewsInsideContainer>
          </TopReviewsContainer>
          <CategoriesBody> REVIEW-G </CategoriesBody>
        </ContentContainer>
      </Container>
    </>
  )
}
export default Body
