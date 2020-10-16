import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/SlideShowBlock'
import image1 from '../assets/genshin.jpg'
import image2 from '../assets/battlefield.jpg'
import image3 from '../assets/death.jpg'
import image4 from '../assets/heat.jpg'
import image5 from '../assets/red2.jpg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position:relative;
  overflow: hidden;
`
const Slide = styled.div`
  height: 100%;
  min-width: 100%;
  transition: 0.5s;
`
const LeftButton = styled.button`
  width: 10%;
  height: 100%;
  position: absolute;
  left: auto;
  top: auto;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  /* transform: translateY(-50%); */
`
const RightButton = styled.button`
  width: 10%;
  height: 100%;
  position: absolute;
  right: 0;
  top: auto;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  /* transform: translateY(-50%); */
`

function SlideShow () {
  const slides = [<BackgroundBlock key='1' src={image1} />, <BackgroundBlock key='2' src={image2} />, <BackgroundBlock key='3' src={image3} />, <BackgroundBlock key='4' src={image4} />, <BackgroundBlock key='5' src={image5} />]

  const [x, setX] = useState(0)

  const handleGoLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100)
  }
  const handleGoRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <>
      <Container>
        {slides.map((item, index) => {
          return (
            <Slide key={index} style={{ transform: `translateX(${x}%)` }}>{item}</Slide>
          )
        })}
        <LeftButton onClick={handleGoLeft}>←Left</LeftButton>
        <RightButton onClick={handleGoRight}>Right→</RightButton>
      </Container>
    </>
  )
}

export default SlideShow
