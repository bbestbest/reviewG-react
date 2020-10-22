import React from 'react'
import { Container, BodyContainer } from '../CatagoriesBody'
import InputPost from './InputPost'
import {
  HeadingContainer,
  Heading,
  PostContainer
} from './AdminStyled'

function Admin () {
  return (
    <>
      <Container>
        <BodyContainer>
          <HeadingContainer>
            <Heading> POST </Heading>
          </HeadingContainer>
          <PostContainer>
            <InputPost />
          </PostContainer>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Admin
