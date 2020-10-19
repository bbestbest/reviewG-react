import React from 'react'
import styled from 'styled-components'

const HeadingScore = styled.div`
  font-size: 25px;
  border-bottom: 3.5px solid #f69335;
  width: 70%;
  padding-bottom: 0.8rem;
`

export const ScoreCriterias = styled.div`
  padding: 3rem 0 1rem 3rem;
  font-size: 23px;
`

function ScoreCriteria ({ children }) {
  return (
    <>
      <HeadingScore> {children} </HeadingScore>
      <ScoreCriterias> Story </ScoreCriterias>
      <ScoreCriterias> Gameplay </ScoreCriterias>
      <ScoreCriterias> Performance </ScoreCriterias>
      <ScoreCriterias> Graphic </ScoreCriterias>
    </>
  )
}

export default ScoreCriteria
