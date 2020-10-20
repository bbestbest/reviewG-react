import React from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'
import { render } from 'react-dom'

const ratingChanged = newRating => {
  console.log(newRating)
}

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
      <RatingCriteria> Story </RatingCriteria>
      <RatingCriteria> Gameplay </RatingCriteria>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={100}
        color1={ '#003d59' }
        color2={ '#f69335' }
      />
    </>
  )
}

export default Rating
