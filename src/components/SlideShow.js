import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/SlideShowBlock'
import { getData } from '../services/fetchData'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`
const SlideContainer = styled.div`
  height: 100%;
  width: 100vw;

  z-index: 5000;
`
const Slide = styled.div`
  height: 100%;
  width: 100vw;
  transition: transform .5s;
  position: static;
`
const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
`
const LeftButton = styled.button`
  width: 10%;
  height: 100%;
  left: 0;
  top: -15%;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
`
const RightButton = styled.button`
  width: 10%;
  height: 100%;
  right: 0;
  top: -15%;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
`

function SlideShow () {
  const [data, setData] = useState([])
  const [x, setX] = useState(0)

  // const slides = [<BackgroundBlock key='1' src='' />, <BackgroundBlock key='2' src='' />, <BackgroundBlock key='3' src='' />, <BackgroundBlock key='4' src='' />, <BackgroundBlock key='5' src='' />]

  const handleGoLeft = (image) => {
    x === 0 ? setX(-100 * 4) : setX(x + 100)
  }
  const handleGoRight = (image) => {
    x === 100 * -4 ? setX(0 + 100) : setX(x - 100)
  }

  useEffect(() => {
    getData('posts', 'assets').then(response => setData(response))
  }, [])

  return (
    <>
      <Container>
        {data.slice(0, 5).map((item, index) => {
          return (
            <SlideContainer key={index}>
              {item.assets.sort((a, b) => b.post_id - a.post_id).map((image, index2) => (
                <Slide key={index2} style={{ transform: `translateX(${x}%)` }}>
                  <BackgroundBlock src={image.asset_path} />
                </Slide>
              ))}
              <ButtonContainer>
                <LeftButton onClick={handleGoLeft}>← Left</LeftButton>
                <RightButton onClick={handleGoRight}>Right →</RightButton>
              </ButtonContainer>
            </SlideContainer>
          )
        })}
      </Container>
    </>
  )
}

export default SlideShow
