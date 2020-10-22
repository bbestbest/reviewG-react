import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData, countView } from '../../../services/fetchData'
import styled from 'styled-components'

const Containar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
  color: #000;
  position: relative;
  
  a {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`

const TopicContainer = styled.div`
  width: 20vw;
  height: 19rem;
  margin: 30px;
`

const ImageTopic = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 15rem;
  border-radius: 15px;
`
const Topics = styled.div`
  font-size: 18px;
  line-height: 1.2;
  padding-top: 1rem;
  width: auto;
  height: auto;
`
const DateOfTopics = styled.div`
  font-size: 12px;
  padding-top: 10px;
`

function Topic ({ children }) {
  const [data, setData] = useState([])

  const handleOnClick = (catagories, id) => {
    return countView('posts', catagories, id)
  }

  useEffect(() => {
    getData('posts', 'assets').then(response => setData(response))
  }, [])

  return (
    <>
      <Containar>
        {data.sort((a, b) => b.post_id - a.post_id).map((item, index) => (
          <TopicContainer key={index}>
            <Link to={`/review/${item.catagories}/${item.post_id}`} onClick={() => handleOnClick(item.catagories, item.post_id)}>
              {item.assets.map((image, index2) => (
                <ImageTopic key={index2} src={image.asset_path} />
              ))}
              <Topics>
                {item.topic}
              </Topics>
              <DateOfTopics />
            </Link>
          </TopicContainer>
        ))}
      </Containar>
    </>
  )
}

export default Topic
