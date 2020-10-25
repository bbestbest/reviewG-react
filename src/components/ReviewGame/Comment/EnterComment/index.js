/* global fetch */

import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext, { CurrentUser } from '../../../../contexts/AuthContext'
import styled from 'styled-components'

const Container = styled.div`
  height: 7%;
  width: 100%;
  /* border: solid #f69335 1px; */
  /* border-radius: 25px; */
  margin-bottom: 10%;
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

const ButtonSubmit = styled.button`
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
  cursor: pointer;
  button {
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
  }
`

function EnterComment () {
  const [story, setStory] = useState('')
  const [gameplay, setGameplay] = useState('')
  const [performance, setPerformance] = useState('')
  const [graphic, setGraphic] = useState('')
  const [comment, setComment] = useState('')
  const { id } = useParams()
  const { usernameId } = useContext(AuthContext)

  const handleChangeStory = event => setStory(event.target.value)
  const handleChangeGameplay = event => setGameplay(event.target.value)
  const handleChangePerformance = event => setPerformance(event.target.value)
  const handleChangeGraphic = event => setGraphic(event.target.value)
  const handleChangeComment = event => setComment(event.target.value)

  const onSubmited = () => {
    console.log(id, usernameId)
    const scoreOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        story: story,
        gameplay: gameplay,
        performance: performance,
        graphic: graphic,
        user_id: usernameId,
        post_id: id
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/user_scores', scoreOption)
      .then(response => response.json())
      .then(response => console.log(response))

    const commentOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: comment,
        user_id: usernameId,
        post_id: id,
        date: new Date().toLocaleString()
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/comments', commentOption)
      .then(response => response.json())
      .then(response => console.log(response))

  }

  return (
    <>
      <Container>
        <ScoreContainer>
          <HeadingCatagories> Your score : </HeadingCatagories>
          <ScoreCatagories className='Story'> Story </ScoreCatagories>
          <Score
            required
            onChange={handleChangeStory}
            type='number'
            min='0'
            max='10'
          />

          <ScoreCatagories className='Gameplay'> Gameplay </ScoreCatagories>
          <Score
            required
            onChange={handleChangeGameplay}
            type='number'
            min='0'
            max='10'
          />

          <ScoreCatagories className='Performance'>
            {' '}
            Performance{' '}
          </ScoreCatagories>
          <Score
            required
            onChange={handleChangePerformance}
            type='number'
            min='0'
            max='10'
          />

          <ScoreCatagories className='Graphic'> Graphic </ScoreCatagories>
          <Score
            required
            onChange={handleChangeGraphic}
            type='number'
            min='0'
            max='10'
          />
        </ScoreContainer>

        <CommentInput onChange={handleChangeComment} placeholder=' Comment...' />
        <ButtonSubmitContainer>
          <ButtonSubmit onClick={onSubmited}> Comment </ButtonSubmit>
        </ButtonSubmitContainer>
      </Container>
    </>
  )
}

export default EnterComment
