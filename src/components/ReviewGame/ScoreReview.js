import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
  display: flex;
  padding: 2rem;
  width: auto;
  height: auto;
  background-color: greenyellow;
`
const ScoreAdminContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: red;
`

const ScoreUserContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: green;
`

function ScoreReview () {
  return (
    <>
      <ScoreContainer>
        <ScoreAdminContainer />
        <ScoreUserContainer />
      </ScoreContainer>
    </>
  )
}

export default ScoreReview
