/* global fetch */

import React, { useState } from 'react'
// import Topic from '../../News/NewsTopic/index.'
import {
  SubHeading,
  ButtonTextarea,
  ButtonInput,
  InputFile,
  ScoreContainer,
  ScoreCatagories,
  Score,
  ButtonSubmit
} from './InputPostStyled'
// import PostData from '../../../services/PostData'

function InputPost () {
  const [topic, setTopic] = useState('')
  const [body, setBody] = useState('')
  const [writer, setWriter] = useState('')
  // const [catagories, setCatagories] = useState('')
  const [story, setStory] = useState('')
  const [gameplay, setGameplay] = useState('')
  const [performance, setPerformance] = useState('')
  const [graphic, setGraphic] = useState('')

  const [fileImage, setFileImage] = useState(null)

  const handleChangeTopic = event => setTopic(event.target.value)
  const handleChangeBody = event => setBody(event.target.value)
  const handleChangeWriter = event => setWriter(event.target.value)

  const handleChangeStory = event => setStory(event.target.value)
  const handleChangeGameplay = event => setGameplay(event.target.value)
  const handleChangePerformance = event => setPerformance(event.target.value)
  const handleChangeGraphic = event => setGraphic(event.target.value)

  const handleChangeImage = event => setFileImage(event.target.value)

  const onSubmited = () => {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: topic,
        body: body,
        writer: writer,
        catagories: 'actiondddddd'
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/posts', postOptions)
      .then(response => response.json())
      .then(response => console.log(response))

    const scoreOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        story: story,
        gameplay: gameplay,
        performance: performance,
        graphic: graphic
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/admin_scores', scoreOption)
      .then(response => response.json())
      .then(response => console.log(response))

    const imageOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        asset_path: fileImage
        // type: ['image']
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/assets', imageOption)
      .then(response => response.json())
      .then(response => console.log(response))
  }

  return (
    <>
      <from>
        <SubHeading> Topic </SubHeading>
        <ButtonTextarea
          onChange={handleChangeTopic}
          className='Topic '
          placeholder=' ex: Topic... '
        />

        <SubHeading> Writer </SubHeading>
        <ButtonInput
          onChange={handleChangeWriter}
          placeholder=' ex: Writer... '
        />

        <SubHeading> Body </SubHeading>
        <ButtonTextarea
          onChange={handleChangeBody}
          placeholder=' ex: Content... '
        />

        <SubHeading> Image </SubHeading>
        <InputFile onChange={handleChangeImage} className='Image file ' type='file' />

        <SubHeading> Score </SubHeading>
        <ScoreContainer>
          <ScoreCatagories className='Story'> Story </ScoreCatagories>
          <Score onChange={handleChangeStory} type='number' min='0' max='10' />
        </ScoreContainer>

        <ScoreContainer>
          <ScoreCatagories className='Gameplay'> Gameplay </ScoreCatagories>
          <Score onChange={handleChangeGameplay} type='number' min='0' max='10' />
        </ScoreContainer>

        <ScoreContainer>
          <ScoreCatagories className='Performance'>
            {' '}
            Performance{' '}
          </ScoreCatagories>
          <Score onChange={handleChangePerformance} type='number' min='0' max='10' />
        </ScoreContainer>

        <ScoreContainer>
          <ScoreCatagories className='Graphic'> Graphic </ScoreCatagories>
          <Score onChange={handleChangeGraphic} type='number' min='0' max='10' />
        </ScoreContainer>

        <ButtonSubmit onClick={onSubmited}> Submit </ButtonSubmit>
      </from>
    </>
  )
}

export default InputPost
