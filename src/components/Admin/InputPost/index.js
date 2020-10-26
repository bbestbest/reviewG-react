/* global fetch */

import React, { useContext, useState } from 'react'
// import Topic from '../../News/NewsTopic/index.'
import {
  SubHeading,
  ButtonTextarea,
  ButtonInput,
  ButtonInputCatagorise,
  OptionCatagorise,
  InputFile,
  ScoreContainer,
  ScoreCatagories,
  Score,
  ButtonSubmit
} from './InputPostStyled'
import AuthContext from '../../../contexts/AuthContext'
import { getDataWithoutRef } from '../../../services/fetchData'
import { Item } from 'semantic-ui-react'
// import PostData from '../../../services/PostData'

function InputPost () {
  const [topic, setTopic] = useState('')
  const [body, setBody] = useState('')
  const [writer, setWriter] = useState('')
  const [story, setStory] = useState('')
  const [gameplay, setGameplay] = useState('')
  const [performance, setPerformance] = useState('')
  const [graphic, setGraphic] = useState('')
  const [catagories, setCatagories] = useState('')
  const [fileImage, setFileImage] = useState(null)
  const { usernameId } = useContext(AuthContext)

  const handleChangeTopic = event => setTopic(event.target.value)
  const handleChangeBody = event => setBody(event.target.value)
  const handleChangeWriter = event => setWriter(event.target.value)

  const handleChangeStory = event => setStory(event.target.value)
  const handleChangeGameplay = event => setGameplay(event.target.value)
  const handleChangePerformance = event => setPerformance(event.target.value)
  const handleChangeGraphic = event => setGraphic(event.target.value)

  const handleListCatagorise = event => setCatagories(event.target.value)

  const handleChangeImage = event => setFileImage(event.target.files[0])

  const onSubmited = async () => {
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
        admin_id: usernameId
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/admin_scores', scoreOption)
      .then(response => response.json())
      .then(response => console.log(response))

    const getAdminScore = await getDataWithoutRef('admin_scores').then(response => response.length)

    console.log(getAdminScore)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topic: topic,
        body: body,
        writer: writer,
        catagories: catagories,
        admin_id: usernameId,
        admin_score_id: getAdminScore
      })
    }
    fetch('http://127.0.0.1:3333/api/v1/posts', postOptions)
      .then(response => response.json())
      .then(response => console.log(response))

// iamge
    const formData = new FormData()

    formData.append('image', fileImage)

    const imageOption = {
      method: 'POST',
      body: formData
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

        <SubHeading> Catagories </SubHeading>
        <ButtonInputCatagorise onChange={handleListCatagorise}>
          <OptionCatagorise value='action'>Action</OptionCatagorise>
          <OptionCatagorise value='adventure'>Adventure</OptionCatagorise>
          <OptionCatagorise value='rpg'>RPG</OptionCatagorise>
          <OptionCatagorise value='simulation'>Simulation</OptionCatagorise>
          <OptionCatagorise value='strategy'>Strategy</OptionCatagorise>
          <OptionCatagorise value='sport'>Sport</OptionCatagorise>
        </ButtonInputCatagorise>

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
