import React from 'react'
import styled from 'styled-components'

const CommentAreaContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  margin: 0 3rem 0 3rem;
`
const ProfileImageUser = styled.div`
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
  font-size: 12px;
`
const DateComment = styled.div`
  display: flex;
  align-items: center;
  font-size: 8px;
  margin-left: 1rem;
`
// Comment User end

function CommentUser () {
  return (
    <CommentAreaContainer>
      <ProfileImageUser />
      <CommentContainer>
        <CommentUsers> ควยหีแตด</CommentUsers>
        <NameComment>
          Bbest
          <DateComment> 22/10/2563 </DateComment>
        </NameComment>
      </CommentContainer>
    </CommentAreaContainer>
  )
}

export default CommentUser
