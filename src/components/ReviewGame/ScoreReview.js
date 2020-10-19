import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
  display: flex;
  padding:  0 2rem 0 2rem;
  width: auto;
  height: auto;
  background-color: greenyellow;
`
const ScoreAdminContainer = styled.div`
  width: 100%;
  height: 50vh;
`

const ScoreUserContainer = styled.div`
  width: 100%;
  height: 50vh;
`

const HeadingScore = styled.div`
  font-size: 28px;
  border-bottom: 3px solid #f69335;
  width: 55%;
  padding-bottom: 5px;
`

function ScoreReview () {
  return (
    <>
      <ScoreContainer>
        <ScoreAdminContainer>
          <HeadingScore> Review by admin </HeadingScore>
        </ScoreAdminContainer>
        <ScoreUserContainer>
          <HeadingScore> Review by user </HeadingScore>
        </ScoreUserContainer>
      </ScoreContainer>
    </>
  )
}

export default ScoreReview
