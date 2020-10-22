import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData, getDataById } from '../../services/fetchData'
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
  const [catagoriesData, setCatagoriesData] = useState({})
  const [data, setData] = useState([])
  const { catagories, id } = useParams()

  useEffect(() => {
    getData('posts', 'assets').then(response => setCatagoriesData(response))
    getDataById('posts', 'assets', catagories, id).then(response => setData(response))
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
            {item.assets.map((image) => (
              <ImageTopic key={index} src={image.asset_path} />
            ))}
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
