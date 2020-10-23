import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 7%;
  width: 100%;
  /* border: solid #f69335 1px; */
  /* border-radius: 25px; */
`
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
// Comment

const CommentInput = styled.input`
  width: 90%;
  height: 2rem;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 20px;
  margin: 0 3rem 3rem 3rem;
  padding: 5px 10px 5px 10px;
  /* color: #f69335; */
  &::placeholder {
    /* color: #f69335; */
  }
`
const ButtonSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: auto;
  margin: 0 3rem 0 0;
`

const ButtonSubmit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: #f04823;
  border: 2px solid #f04823;
  color: white;
  border-radius: 8px;
  transition: background-color 0.5s;
  font-size: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
  }
`

function EnterComment () {
  return (
    <>
      <Container>
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

        <CommentInput placeholder=' Comment...' />
        <ButtonSubmitContainer>
          <ButtonSubmit> Comment </ButtonSubmit>
        </ButtonSubmitContainer>
      </Container>
    </>
  )
}

export default EnterComment
