import React from 'react'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

const Containar = styled.div`
  background: #003d59;
  display: flex;
  justify-content: center;
  width: auto;
  height: 89vh;
  padding: 1.5rem 4rem 1.5rem 4rem;
`
const BodyContainer = styled.div`
  /* flex-direction: column; */
  background: white;
  width: 90%;
  height: auto;
  border-radius: 2rem;
  padding: 2rem;
`
// TopicReview start
const TopicReviewContainer = styled.div`
  height: auto;
  width: auto;
  background-color: greenyellow;
`

const TopicReview = styled.div`
  font-size: 25px;
  height: auto;
  width: 90%;
`
// TopicReview end
const Image = styled.div`
  height: 50vh;
  width: 50vh;
  background-color:  red;
`

function ReviewGame () {
  return (
    <>
      <Reset />
      <Containar>
        <BodyContainer>
          <TopicReviewContainer>
            <TopicReview>
              55555555555555555555555555555555555555555555555555555
              555555555555555555555555555555555555555555555555555555555555
              555555555555555555555555555555555555555555555555555555
              555555555555555555555555555555555555555555555555555555
              555555555555555555555555555555555555555555555555555555
            </TopicReview>
          </TopicReviewContainer>
          <Image />
        </BodyContainer>
      </Containar>dic`
    </>
  )
}

export default ReviewGame
