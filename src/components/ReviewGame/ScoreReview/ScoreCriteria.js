import React from 'react'
import styled from 'styled-components'

const HeadingScore = styled.div`
  font-size: 25px;
  border-bottom: 3.5px solid #f69335;
  width: 70%;
  padding-bottom: 0.8rem;
`

export const ScoreCriterias = styled.div`
  padding: 2rem 0 1rem 3rem;
  font-size: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ScoreContainer = styled.div`
  width: 5rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: #f69335;
  margin-right: 8rem;
`

function ScoreCriteria ({ children }) {
  return (
    <>
      <HeadingScore> {children} </HeadingScore>
      <ScoreCriterias>
        Story
        <ScoreContainer />
      </ScoreCriterias>
      <ScoreCriterias>
        Gameplay
        <ScoreContainer />
      </ScoreCriterias>
      <ScoreCriterias>
        Performance
        <ScoreContainer />
      </ScoreCriterias>
      <ScoreCriterias>
        Graphic
        <ScoreContainer />
      </ScoreCriterias>
    </>
  )
}

export default ScoreCriteria
