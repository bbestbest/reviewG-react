import React from 'react'
import CommentUser from './CommentUser'
import { withBaseIcon } from 'react-icons-kit'
import { iosChatbubbleOutline } from 'react-icons-kit/ionicons/iosChatbubbleOutline'

const SideIconContainer = withBaseIcon({
  size: '30px',
  style: { color: '#f69335 ' }
})

export const IosChatbubbleOutline = () => <SideIconContainer icon={iosChatbubbleOutline} />

function Comment (props) {
  return (
    <>
      {/* <HeadingComment> Comment <IosChatbubbleOutline /> </HeadingComment> */}

      <CommentUser commentBody={props.commentBody} commentDate={props.commentDate} userWhoCommented={props.userWhoCommented} story={props.story} />
    </>
  )
}

export default Comment
