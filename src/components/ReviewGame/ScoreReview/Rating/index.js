import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'

const HeadingContainer = styled.div`
  padding: 2rem 0 2rem 0;
`

const HeadingRating = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 10px;
  padding: 1.4rem;
  font-size: 23px;
  font-weight: bold;
  color: white;
  background-color: #f69335;
`

const RatingCriteriaContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
`

const RatingCriteria = styled.div`
  display: block;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 3.5px solid #f69335;
  padding-bottom: 0.8rem;
  margin: 3rem;
`

function Rating () {
  return (
    <>
      <HeadingContainer>
        <HeadingRating> Review Score </HeadingRating>
      </HeadingContainer>
      <RatingCriteriaContainer>
        <RatingCriteria> Story </RatingCriteria>
        <Stars />
      </RatingCriteriaContainer>

      <RatingCriteriaContainer>
        <RatingCriteria> Gameplay </RatingCriteria>
        <Stars />
      </RatingCriteriaContainer>

      <RatingCriteriaContainer>
        <RatingCriteria> Performance </RatingCriteria>
        <Stars />
      </RatingCriteriaContainer>

      <RatingCriteriaContainer>
        <RatingCriteria> Graphic </RatingCriteria>
        <Stars />
      </RatingCriteriaContainer>
    </>
  )
}

export default Rating
