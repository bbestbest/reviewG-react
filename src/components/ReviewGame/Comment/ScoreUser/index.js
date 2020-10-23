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
  color: #f69335;
`
const Score = styled.div`
  font-size: 16px;
  color: #f69335;

  h1 {
    font-size: 1.5rem;
  }
`

export function ScoreUser ({ story, gameplay, performance, graphic, overall }) {
  return (

    // ex 1
    <UserScoreContainer>
      <HeadingSubScore> Score </HeadingSubScore>

      <CriteriaScore> Story </CriteriaScore>
      <ScoreContainer>
        <Score> {story} </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Gameplay </CriteriaScore>
      <ScoreContainer>
        <Score> {gameplay} </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Performance </CriteriaScore>
      <ScoreContainer>
        <Score> {performance} </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Graphic </CriteriaScore>
      <ScoreContainer>
        <Score> {graphic} </Score>
        /10
      </ScoreContainer>

      <CriteriaScore> Overall </CriteriaScore>
      <ScoreContainer>
        <Score><h1> {overall} </h1> </Score>
        /10
      </ScoreContainer>
    </UserScoreContainer>
  )
}

// export default ScoreUser
