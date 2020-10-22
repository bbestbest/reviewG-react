import React from 'react'
import styled from 'styled-components'

// Score User
const UserScoreContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f69335;
  width: auto;
  height: auto;
  margin: 0 3rem 3rem 3rem;
  padding: 1rem 2rem 1.5rem 2rem;
`

const HeadingSubScore = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #f69335;
`
const CriteriaScore = styled.div`
  font-size: 13px;
  margin: 0 1rem 0 2rem;
`
const ScoreContainer = styled.div`
  display: flex;
  font-size: 16px;
  color: #f69335;
`
const Score = styled.div`
  font-size: 16px;
  color: #f69335;
`

// Score User end

function ScoreUser () {
  return (

    // ex 1
    <UserScoreContainer>
      <HeadingSubScore> Your score </HeadingSubScore>

      <CriteriaScore> Story </CriteriaScore>
      <ScoreContainer>
        <Score> 7 </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Gameplay </CriteriaScore>
      <ScoreContainer>
        <Score> 7 </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Performance </CriteriaScore>
      <ScoreContainer>
        <Score> 7 </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Graphic </CriteriaScore>
      <ScoreContainer>
        <Score> 7 </Score>
        /10
      </ScoreContainer>
    </UserScoreContainer>
  )
}

export default ScoreUser
