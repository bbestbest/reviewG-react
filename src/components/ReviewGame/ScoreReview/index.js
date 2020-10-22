import React from 'react'
import styled from 'styled-components'
import ScoreCriteria from './ScoreCriteria'
// import Rating from './Rating'

const ScoreReviewContainer = styled.div`
  display: flex;
  padding: 1rem 3.5rem 1rem 3.5rem;
  width: auto;
  height: auto;
`
const ScoreAdminUserContainer = styled.div`
  padding-left: 2rem;
  width: 100%;
  height: auto;
`

function ScoreReview () {
  return (
    <>
      <ScoreReviewContainer>

        <ScoreAdminUserContainer>
          <ScoreCriteria> Score review by admin </ScoreCriteria>
        </ScoreAdminUserContainer>

        {/* <ScoreAdminUserContainer>
          <Rating />
        </ScoreAdminUserContainer> */}

      </ScoreReviewContainer>
    </>
  )
}

export default ScoreReview
