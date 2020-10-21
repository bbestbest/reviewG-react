import React from 'react'
import { Container, BodyContainer } from '../CatagoriesBody'
import {
  HeadingContainer,
  Heading,
  PostContainer,
  SubHeading, ButtonTextarea,
  ButtonInput,
  InputFile,
  ScoreContainer,
  ScoreCatagories,
  Score
} from './AdminStyled.'

function Admin () {
  return (
    <>
      <Container>
        <BodyContainer>
          <HeadingContainer>
            <Heading> POST </Heading>
          </HeadingContainer>
          <PostContainer>

            <SubHeading> Topic </SubHeading>
            <ButtonTextarea className='Topic ' placeholder=' ex: Topic... ' />

            <SubHeading> Writer </SubHeading>
            <ButtonInput className='Writer' placeholder=' ex: Writer... ' />

            <SubHeading> Content </SubHeading>
            <ButtonTextarea
              className='Content '
              placeholder=' ex: Content... '
            />

            <SubHeading> Image </SubHeading>
            <InputFile className='Image file ' type='file' />

            <SubHeading> Score </SubHeading>
            <ScoreContainer>
              <ScoreCatagories className='Story'> Story </ScoreCatagories>
              <Score type='number' min='0' max='10' />
            </ScoreContainer>

            <ScoreContainer>
              <ScoreCatagories className='Gameplay'> Gameplay </ScoreCatagories>
              <Score type='number' min='0' max='10' />
            </ScoreContainer>

            <ScoreContainer>
              <ScoreCatagories className='Performance'> Performance </ScoreCatagories>
              <Score type='number' min='0' max='10' />
            </ScoreContainer>

            <ScoreContainer>
              <ScoreCatagories className='Graphic'> Graphic </ScoreCatagories>
              <Score type='number' min='0' max='10' />
            </ScoreContainer>

          </PostContainer>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Admin
