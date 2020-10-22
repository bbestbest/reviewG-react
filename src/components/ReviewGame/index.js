import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById } from '../../services/fetchData'
import { Reset } from 'styled-reset'
import ScoreReview from './ScoreReview'
import Comment from './Comment'
import {
  Container,
  BodyContainer,
  TopicReviewContainer,
  TopicReview,
  DateTopicReview,
  ImageTopic,
  ContentContainer,
  Content,
  Border,
  HeadingContainer,
  Heading,
  AdminContainer,
  ProfileImageAdmin,
  NameAdmin
} from './reviewGameStyled'

function ReviewGame () {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDataById('posts', 'assets', 'Action', id).then(response => setData(response))
  })
  return (
    <>
      <Reset />
      {data.map((item, index) => (
        <Container key={index}>
          <BodyContainer>
            <TopicReviewContainer>
              <TopicReview>
                {item.topic}
                <DateTopicReview> {item.post_date} </DateTopicReview>
              </TopicReview>
            </TopicReviewContainer>
            <ImageTopic />
            <ContentContainer>
              <Content>
                {item.body}
              </Content>
              <Border />
              <Heading> Review by Admin </Heading>
              <AdminContainer>
                <ProfileImageAdmin />
                <NameAdmin> naratipcover </NameAdmin>
              </AdminContainer>
              <Border />
              <HeadingContainer>
                <Heading> Review Score </Heading>
              </HeadingContainer>
              <ScoreReview />
            </ContentContainer>
            <Comment />
          </BodyContainer>
        </Container>
      ))}
    </>
  )
}

export default ReviewGame
