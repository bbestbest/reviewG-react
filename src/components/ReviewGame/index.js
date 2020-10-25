import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getData, getDataByIdAndCatagories } from '../../services/fetchData'
import AuthContext from '../../contexts/AuthContext'
import ScoreReview from './ScoreReview'
import Comment from './Comment'
import { ScoreUser } from './Comment/ScoreUser'
import EnterComment from './Comment/EnterComment'
// import backgroundImage from '../../assets/genshin-impact-1.jpg'
import backgroundAdmin from '../../assets/admin.jpg'
import { withBaseIcon } from 'react-icons-kit'
import { iosChatbubbleOutline } from 'react-icons-kit/ionicons/iosChatbubbleOutline'
import styled from 'styled-components'
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

const LoginContainer = styled.div`
  height: 1%;
  width: 100%;
  border-bottom: #f69335 solid 5px;
  h1 {
    font-size : 3rem;
    margin-left: 5rem;
  }
`
const SideIconContainer = withBaseIcon({
  size: '10%',
  // style: { color: '#f69335 ' }
  style: { color: '#fff ' }
})

export const IosChatbubbleOutline = () => <SideIconContainer icon={iosChatbubbleOutline} />

function ReviewGame () {
  const [data, setData] = useState([])
  const [admin, setAdmin] = useState([])
  const [adminScores, setAdminScores] = useState([])
  const [userComment, setUserComment] = useState([])
  const [userScore, setUserScore] = useState([])
  const { catagories, id } = useParams()
  const { isLogin } = useContext(AuthContext)

  useEffect(() => {
    getDataByIdAndCatagories('posts', 'assets', catagories, id).then(response => setData(response))
    getDataByIdAndCatagories('posts', 'admins', catagories, id).then(response => setAdmin(response))
    getDataByIdAndCatagories('posts', 'adminScore', catagories, id).then(response => setAdminScores(response))
    getData('users', 'comments').then(response => setUserComment(response))
    getData('users', 'userScores').then(response => setUserScore(response))
  }, [])

  return (
    <>
      {data.map((item, index) => (
        <Container key={index}>
          <BodyContainer>
            <TopicReviewContainer>
              <TopicReview>
                {item.topic}
                <DateTopicReview> {item.post_date} </DateTopicReview>
              </TopicReview>
            </TopicReviewContainer>
            {item.assets.map((image, index2) => (
              <ImageTopic key={index2} src={image.asset_path} />
            ))}
            <ContentContainer>
              <Content>{item.body}</Content>
              <Border />
              {admin.map((adminItem, adminIndex) => (
                <AdminContainer key={adminIndex}>
                  <Admin>
                    <Heading> Review by Admin </Heading>
                    <ProfileAdmin>
                      <ProfileImageAdmin src={backgroundAdmin} />
                      <NameAdmin> {adminItem.admins ? adminItem.admins.display_name : ''} </NameAdmin>
                    </ProfileAdmin>
                  </Admin>
                  {adminScores.map((adminScoreItem, adminScoreIndex) => (
                    <ScoreReview key={adminScoreIndex} story={adminScoreItem.adminScore.story} gameplay={adminScoreItem.adminScore.gameplay} performance={adminScoreItem.adminScore.performance} graphic={adminScoreItem.adminScore.graphic} overall={adminScoreItem.adminScore.overall} />
                  ))}
                </AdminContainer>
              ))}
              <Border />
            </ContentContainer>
            <Heading> Comment <IosChatbubbleOutline /></Heading>
            {isLogin ? <EnterComment /> : <LoginContainer><h1>Please Login First</h1></LoginContainer>}
            <>
              {userComment.map((userCommentItem, userCommentIndex) => (
                <div key={userCommentIndex}>
                  {userCommentItem.comments.filter(userRefComment => userRefComment.post_id === item.post_id).sort((a, b) => b.comment_id - a.comment_id).map((userRefCommentItem, userRefCommentIndex) => (
                    <div key={userRefCommentIndex}>
                      <Comment commentBody={userRefCommentItem.comment} commentDate={userRefCommentItem.date} userWhoCommented={userCommentItem.display_name} />
                      {userScore.filter(userScoreId => userScoreId.user_id === userCommentItem.user_id).map((userScoreItem, userScoreIndex) => (
                        <div key={userScoreIndex}>
                          {userScoreItem.userScores.slice(0, 1).map((userRefScoreItem, userRefScoreIndex) => (
                            <div key={userRefScoreIndex}>
                              <ScoreUser story={userRefScoreItem.story} gameplay={userRefScoreItem.gameplay} performance={userRefScoreItem.performance} graphic={userRefScoreItem.graphic} overall={userRefScoreItem.overall} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </>
          </BodyContainer>
        </Container>
      ))}
    </>
  )
}

export default ReviewGame
