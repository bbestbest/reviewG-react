import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData, countView } from '../../../services/fetchData'
import styled from 'styled-components'
import BackgroundBlock from '../../BackgroundBlock'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: .30rem;
`

const ContentContainer = styled.div`
  width: auto;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const TopReviewsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: .5rem;
`
const TopReviewsInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`
const TopReviews = styled.div`
  height: 100%;
  width: 30%;
  margin: 0 0.5%;
  overflow: hidden;
  border-radius: 10px;
  transition: opacity 0.4s;
  &:hover{
    opacity: 0.7;
  }
 
`
const Topic = styled.div`
  margin-top: 15%;
  padding: 1.2rem;
  width: 18%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  color: white;
  z-index: 5000;

`

function Body ({ children }) {
  const [data, setData] = useState([])

  const handleOnClick = (catagories, id) => {
    return countView('posts', catagories, id)
  }

  useEffect(() => {
    getData('posts', 'assets').then(response => setData(response))
  })
  return (
    <>
      <Container>
        <ContentContainer>
          <TopReviewsContainer>
            <TopReviewsInsideContainer>
              {data.sort((a, b) => b.views - a.views).slice(0, 5).map((item, index) => (
                <TopReviews key={index}>
                  <Link to={`/review/${item.catagories}/${item.post_id}`} onClick={() => handleOnClick(item.catagories, item.post_id)}>
                    <Topic>{item.topic}</Topic>
                    {item.assets.map((image, index2) => (
                      <BackgroundBlock key={index2} src={image.asset_path} height='50' />
                    ))}
                  </Link>
                </TopReviews>
              ))}
            </TopReviewsInsideContainer>
          </TopReviewsContainer>
        </ContentContainer>
      </Container>
    </>
  )
}
export default Body
