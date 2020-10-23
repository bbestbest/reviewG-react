import React from 'react'
import styled from 'styled-components'

const HeadingScore = styled.div`
  font-size: 25px;
  font-weight: bold;
  border-bottom: 3.5px solid #f69335;
  width: 77%;
  padding-bottom: 0.8rem;
`

export const ScoreCriterias = styled.div`
  padding: 2rem 0 1rem 3rem;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ScoreContainer = styled.div`
  display: flex;
`

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 3rem;
  border-radius: 2rem;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: #f69335;
  margin-left: 12rem;
  margin-right: 8rem;
`
const FullScore = styled.div`
  margin-left: .2rem;
  font-size: 1rem;
  color: white;
`

function ScoreCriteria (props) {
  return (
    <>
      <HeadingScore> {props.children} </HeadingScore>

      <ScoreCriterias>
        Story
        <Score>
          {props.story}
          <FullScore> /10 </FullScore>
        </Score>
      </ScoreCriterias>

      <ScoreCriterias>
        Gameplay
        <Score>
          {props.gameplay}
          <FullScore> /10 </FullScore>
        </Score>
      </ScoreCriterias>

      <ScoreCriterias>
        Performance
        <Score>
          {props.performance}
          <FullScore> /10 </FullScore>
        </Score>
      </ScoreCriterias>

      <ScoreCriterias>
        Graphic
        <Score>
          {props.graphic}
          <FullScore> /10 </FullScore>
        </Score>
      </ScoreCriterias>

      <ScoreCriterias>
        Overall
        <Score>
          {props.overall}
          <FullScore> /10 </FullScore>
        </Score>
      </ScoreCriterias>
    </>
  )
}

export default ScoreCriteria
