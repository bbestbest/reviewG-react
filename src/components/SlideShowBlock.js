import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => (props.height)}vh;
  width: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
`
const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(0deg, rgba(0,0,0,.7) 50%, rgba(255,255,255,0) 100%);
`

function BackgroundBlock ({ src, height = 80, children, backgroundPosition = 'center', backgroundSize = 'cover' }) {
  return (
    <BackgroundImage src={src} height={height}>
      <BackgroundOverlay>
        {children}
      </BackgroundOverlay>
    </BackgroundImage>
  )
}

export default BackgroundBlock
