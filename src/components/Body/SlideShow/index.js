import React from 'react'
import SlideShowBlock from '../../SlideShow'
import styled from 'styled-components'

const SlideShowContainer = styled.div`
  width: 100%;
  height: 49vh;
`

function SlideShow ({ children }) {
  return (
    <>
      <SlideShowContainer>
        <SlideShowBlock />
      </SlideShowContainer>
    </>
  )
}
export default SlideShow
