import React from 'react'
import styled from 'styled-components'

const Containar = styled.div`
 background: #003d59;
  display: flex;
  justify-content: center;
  width: auto;
  height: 89vh;
  padding: 1.5rem 4rem 1.5rem 4rem;
`
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  width: 90%;
  height: auto;
  border-radius: 2rem;
  padding: 2rem;
`

function ReviewGame () {
  return (
    <>
      <Containar>
        <BodyContainer />
      </Containar>
    </>
  )
}

export default ReviewGame
