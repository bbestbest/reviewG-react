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
  width: 20%;
  font-size: 30px;
  padding-bottom: 1rem;
  font-weight: bold;
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
            <ButtonTextarea className='Content ' placeholder=' ex: Content... ' />

            <InputFile className='Content ' type='file' />
          </PostContainer>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Admin
