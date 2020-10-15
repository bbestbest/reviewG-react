import React from 'react'
import styled from 'styled-components'

const Containar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
`

const TopicContainer = styled.div`
  width: 23vw;
  height: 20rem;
  margin: 15px;
  border: 3px solid ;
`

function Topic () {
  return (
    <>
      <Containar>
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
        <TopicContainer />
      </Containar>
    </>
  )
}

export default Topic
