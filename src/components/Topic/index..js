import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../../services/fetchData'
import styled from 'styled-components'

const Containar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
  color: #000;
  
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
  height: 11rem;
  border-radius: 15px;
`
const Topics = styled.div`
  font-size: 18px;
  line-height: 1.2;
  padding-top: 1rem;
  width: auto;
  height: auto;
`
const TimeTopics = styled.div`
  font-size: 12px;
  padding-top: 10px;
`

function Topic ({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getData('posts', 'assets').then(response => setData(response))
  }, [])
  return (
    <>
      <Containar>
        {data.map((item, index) => (
          <TopicContainer key={index}>
            <Link to={`/review/${index + 1}`}>
              {item.assets.map((image) => (
                <ImageTopic key={index} src={image.asset_path} />
              ))}
              <Topics>
                {item.topic}
              </Topics>
              <TimeTopics> {item.post_date} </TimeTopics>
            </Link>
          </TopicContainer>
        ))}
      </Containar>
      {/* <Containar>
        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>
      </Containar> */}
    </>
  )
}

export default Topic
