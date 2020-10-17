import React from 'react'
import styled from 'styled-components'
import imageTopic from '../../assets/genshin-impact-1.jpg'

const Containar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
`

const TopicContainer = styled.div`
  width: 20vw;
  height: 19rem;
  margin: 30px;
`

const ImageTopic = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 11rem;
  border-radius: 15px;
`
const Topics = styled.div`
  font-size: 18px;
  padding-top: 1rem;
  width: auto;
  height: auto;
`
const TimeTopics = styled.div`
  font-size: 12px;
  padding-top: 10px;
`

function Topic ({ src }) {
  return (
    <>
      <Containar>
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

        <TopicContainer>
          <ImageTopic src={imageTopic} />
          <Topics>
            ยอดขาย Among Us ขึ้นแท่นอันดับหนึ่งใน Steam ประจำเดือนกันยายนนี้แล้ว
          </Topics>
          <TimeTopics> 16/10/2020 </TimeTopics>
        </TopicContainer>
      </Containar>
    </>
  )
}

export default Topic
