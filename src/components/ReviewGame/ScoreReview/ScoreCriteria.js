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
// score overall

const ScoreOverallCriterias = styled.div`
  padding: 2rem 8rem 2rem 4.3rem;
  font-size: 23px;
  font-weight: bold;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ScoreOverall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-size: 30px;
  font-weight: bold;
  border-radius: 2rem;
  color: white;
  background-color: #003d59;
  margin-left: 12rem;
`

const BgScoreOverall = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  color: white;
  font-size: 25px;
  padding: 0 1rem 0 1rem;
  border-radius: 2rem;
  background-color: #003d59;
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

      <ScoreOverallCriterias>
        <BgScoreOverall>
          Overall
          <ScoreOverall>
            {props.overall}
            <FullScore> /10 </FullScore>
          </ScoreOverall>
        </BgScoreOverall>
      </ScoreOverallCriterias>
    </>
  )
}

export default ScoreCriteria
