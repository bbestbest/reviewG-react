import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => (props.height)}vh;
  width: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`

function BackgroundBlock ({ src, height = 50, children }) {
  return (
    <BackgroundImage src={src} height={height} />
  )
}

export default BackgroundBlock
