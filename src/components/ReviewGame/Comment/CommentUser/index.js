import React from 'react'
import styled from 'styled-components'
import backgroundAdmin from '../../../../assets/admin.jpg'

const CommentAreaContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  margin: 0 3rem 0 3rem;
`
const ProfileImageUser = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: #b7c2c3;
`
// Comment User
const CommentContainer = styled.div`
  width: 80%;
  height: 2rem;
  margin: 2rem;
`
const CommentUsers = styled.div`
  font-size: 20px;
  margin-bottom: 0.8rem;
`
const NameComment = styled.div`
  display: flex;
  font-size: 1rem;
  color: #D04527;
  margin-top: 1.2rem;
  font-weight: bold;
`
const DateComment = styled.div`
  display: flex;
  align-items: center;
  font-size: .75rem;
  margin-left: 1rem;
`
// Comment User end

function CommentUser (props) {
  return (
    <CommentAreaContainer>
      <ProfileImageUser src={backgroundAdmin} />
      <CommentContainer>
        <CommentUsers> {props.commentBody}</CommentUsers>
        <NameComment>
          {props.userWhoCommented}
          <DateComment> {props.commentDate}</DateComment>
        </NameComment>
      </CommentContainer>
    </CommentAreaContainer>
  )
}

export default CommentUser
