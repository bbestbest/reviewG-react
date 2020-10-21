import React from 'react'
import styled from 'styled-components'
import { Container, BodyContainer } from '../CatagoriesBody'

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 6rem;
  border-radius: 20px;
  background-color: #f69335;
  font-size: 30px;
  font-weight: bold;
  color: white;
`
const PostContainer = styled.div`
  width: auto;
  margin: 3rem;
`

const SubHeading = styled.div`
  font-size: 30px;
  padding-bottom: 1rem;
  font-weight: bold;
  margin-top: 3rem;
  border-bottom: 3px solid #f69335;
`

const ButtonTextarea = styled.textarea`
  width: auto;
  height: auot;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 15px;
  margin: 1rem;
  padding: 5px 10px 5px 10px;
  color: #f04823;
  &::placeholder {
    color: #707070;
  }
`
const ButtonInput = styled.input`
  width: 80%;
  height: auto;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 15px;
  margin: 1rem;
  padding: 5px 10px 5px 10px;
  color: #f04823;
  &::placeholder {
    color: #707070;
  }
`

const InputFile = styled.input`
  margin: 2rem;
`

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 2rem;
`

const ScoreCatagories = styled.div`
  font-size: 20px;
`

const Score = styled.input`
  height: auto;
  border: 2px solid #707070;
  border-radius: 5px;
  margin: 1rem;
  padding: 5px 10px 5px 10px;
  color: #f04823;
`

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
