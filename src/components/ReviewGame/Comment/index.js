import React from 'react'
import styled from 'styled-components'
import CommentUser from './CommentUser'
import ScoreUser from './ScoreUser'
import InputScoreUser from './InputScoreUser'
import { withBaseIcon } from 'react-icons-kit'
import { iosChatbubbleOutline } from 'react-icons-kit/ionicons/iosChatbubbleOutline'

const HeadingComment = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 3rem;
`

const CommentInput = styled.input`
  width: 90%;
  height: 2rem;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 20px;
  margin: 0 3rem 3rem 3rem;
  padding: 5px 10px 5px 10px;
  color: #f69335;
  &::placeholder {
    color: #f69335;
  }
`
const ButtonSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  height: auto;
  margin: 0 3rem 0 0;
`

const ButtonSubmit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: #f04823;
  border: 2px solid #f04823;
  color: white;
  border-radius: 8px;
  transition: background-color 0.5s;
  font-size: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
  }
`
const SideIconContainer = withBaseIcon({
  size: '30px',
  style: { color: '#f69335 ' }
})

export const IosChatbubbleOutline = () => <SideIconContainer icon={iosChatbubbleOutline} />

function Comment () {
  return (
    <>
      <HeadingComment> Comment <IosChatbubbleOutline /> </HeadingComment>

      <CommentUser />
      <ScoreUser />

      <CommentUser />
      <ScoreUser />

      <CommentUser />
      <ScoreUser />

      <InputScoreUser />

      <CommentInput placeholder=' Comment...' />
      <ButtonSubmitContainer>
        <ButtonSubmit> Comment </ButtonSubmit>
      </ButtonSubmitContainer>
    </>
  )
}

export default Comment
