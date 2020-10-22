import React from 'react'
import styled from 'styled-components'

const HeadingCatagories = styled.div`
  width: 8rem;
  font-size: 18px;
  font-weight: bold;
  color: #003d59;
`

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 1rem 3rem;

`

const ScoreCatagories = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #f69335;
`

const Score = styled.input`
  height: auto;
  border: 2px solid #707070;
  border-radius: 5px;
  margin: 1rem;
  padding: 5px 10px 5px 10px;
  color: #f04823;
`

function InputScoreUser () {
  return (
    <ScoreContainer>
      <HeadingCatagories> Your score : </HeadingCatagories>
      <ScoreCatagories className='Story'> Story </ScoreCatagories>
      <Score type='number' min='0' max='10' />

      <ScoreCatagories className='Gameplay'> Gameplay </ScoreCatagories>
      <Score type='number' min='0' max='10' />

      <ScoreCatagories className='Performance'> Performance </ScoreCatagories>
      <Score type='number' min='0' max='10' />

      <ScoreCatagories className='Graphic'> Graphic </ScoreCatagories>
      <Score type='number' min='0' max='10' />

    </ScoreContainer>
  )
}

export default InputScoreUser
