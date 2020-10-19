import React from 'react'
import styled from 'styled-components'
import ScoreCriteria, { ScoreCriterias } from './ScoreCriteria'

const ScoreContainer = styled.div`
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
      <ScoreContainer>
        <ScoreAdminUserContainer>
          <ScoreCriteria> Review by admin </ScoreCriteria>
          <ScoreCriterias> Overall </ScoreCriterias>
        </ScoreAdminUserContainer>
        <ScoreAdminUserContainer>
          <ScoreCriteria> Review by user </ScoreCriteria>
        </ScoreAdminUserContainer>
      </ScoreContainer>
    </>
  )
}

export default ScoreReview
