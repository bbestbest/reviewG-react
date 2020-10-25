import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundBlock from '../components/SlideShowBlock'
import { getData, countView } from '../services/fetchData'
import { FiChevronRight } from 'react-icons/fi'
import { FiChevronLeft } from 'react-icons/fi'

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
  z-index: 1000;
`
const Slide = styled.div`
  height: 100%;
  width: 100vw;
  transition: transform 0.5s;
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
  font-size: 4rem;
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
  font-size: 4rem;
`
const TopicContainer = styled.div`
  z-index: 5000;
  width: 100%;
  height: 100%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 1.7rem;
  position: absolute;
`

function SlideShow () {
  const [data, setData] = useState([])
  const [x, setX] = useState(0)

  // const slides = [<BackgroundBlock key='1' src='' />, <BackgroundBlock key='2' src='' />, <BackgroundBlock key='3' src='' />, <BackgroundBlock key='4' src='' />, <BackgroundBlock key='5' src='' />]

  const handleOnClick = (catagories, id) => {
    return countView('posts', catagories, id)
  }

  const handleGoLeft = image => {
    x === 0 ? setX(-100 * 4) : setX(x + 100)
  }
  const handleGoRight = image => {
    x === 100 * -4 ? setX(0) : setX(x - 100)
  }

  useEffect(() => {
    getData('posts', 'assets').then(response => setData(response))
  }, [])

  return (
    <>
      <Container>
        {data
          .sort((a, b) => b.post_id - a.post_id)
          .slice(0, 5)
          .map((item, index) => {
            return (
              <SlideContainer key={index}>
                {item.assets.map((image, index2) => (
                  <Link
                    key={index2}
                    to={`/review/${item.catagories}/${item.post_id}`}
                    onClick={() =>
                      handleOnClick(item.catagories, item.post_id)
                    }>
                    <Slide style={{ transform: `translateX(${x}%)` }}>
                      <TopicContainer>{item.topic}</TopicContainer>
                      <BackgroundBlock src={image.asset_path} />
                    </Slide>
                  </Link>
                ))}
                <ButtonContainer>
                  <LeftButton onClick={handleGoLeft}>
                    <FiChevronLeft />
                  </LeftButton>
                  <RightButton onClick={handleGoRight}>
                    <FiChevronRight />
                  </RightButton>
                </ButtonContainer>
              </SlideContainer>
            )
          })}
      </Container>
    </>
  )
}

export default SlideShow
