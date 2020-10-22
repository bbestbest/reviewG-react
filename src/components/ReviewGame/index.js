import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData, getDataById } from '../../services/fetchData'
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
  const [catagoriesData, setCatagoriesData] = useState({})
  const [data, setData] = useState([])
  const [admins, setAdmins] = useState([])
  const { catagories, id } = useParams()

  useEffect(() => {
<<<<<<< HEAD
    getDataById('posts', 'assets', 'Action', id).then(response =>
      setData(response)
    )
=======
    getData('posts').then(response => setCatagoriesData(response))
    getDataById('posts', 'assets', catagories, id).then(response => setData(response))
    getDataById('posts', 'admins', catagories, id).then(response => setAdmins(response))
>>>>>>> abd1ec4b76b7e36a370b074acb98654b81c9df69
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
