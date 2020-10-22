import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById } from '../../services/fetchData'
import { Reset } from 'styled-reset'
import ScoreReview from './ScoreReview'
import Comment from './Comment'
import backgroundImage from '../../assets/genshin-impact-1.jpg'
import backgroundAdmin from '../../assets/admin.jpg'
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
  Heading,
  AdminContainer,
  Admin,
  ProfileAdmin,
  ProfileImageAdmin,
  NameAdmin
} from './reviewGameStyled'

function ReviewGame () {
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDataById('posts', 'assets', 'Action', id).then(response =>
      setData(response)
    )
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

            <ImageTopic src={backgroundImage} />

            <ContentContainer>
              <Content>{item.body}</Content>

              <Border />
              <AdminContainer>
                <Admin>
                  <Heading> Review by Admin </Heading>
                  <ProfileAdmin>
                    <ProfileImageAdmin src={backgroundAdmin} />
                    <NameAdmin> naratipcover </NameAdmin>
                  </ProfileAdmin>
                </Admin>
                <ScoreReview />
              </AdminContainer>

              <Border />
            </ContentContainer>

            <Comment />
          </BodyContainer>
        </Container>
      ))}
    </>
  )
}

export default ReviewGame
