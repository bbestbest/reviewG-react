import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData, getDataById } from '../../services/fetchData'
import { Reset } from 'styled-reset'
import ScoreReview from './ScoreReview'
import Comment from './Comment'
import {
  Container,
  BodyContainer,
  TopicReviewContainer,
  TopicReview,
  DateTopicReview,
  ImageTopic,
  ContentContainer,
  Content,
  Border,
  HeadingContainer,
  Heading,
  AdminContainer,
  ProfileImageAdmin,
  NameAdmin
} from './reviewGameStyled'

function ReviewGame () {
  const [catagoriesData, setCatagoriesData] = useState({})
  const [data, setData] = useState([])
  const [admins, setAdmins] = useState([])
  const { catagories, id } = useParams()

  useEffect(() => {
    getData('posts').then(response => setCatagoriesData(response))
    getDataById('posts', 'assets', catagories, id).then(response => setData(response))
    getDataById('posts', 'admins', catagories, id).then(response => setAdmins(response))
  })
  return (
    <>
      <Reset />
      {data.map((item, index) => (
        <Container key={index}>
          <BodyContainer>
            <TopicReviewContainer>
              <TopicReview>
                {item.topic}
                {/* ภาพวาดเกม The Last of Us Part II จาก Yoji Shinkawa แห่ง Kojima
                Productions เพื่อเฉลิมฉลองวัน The Last of Us Day */}
                {/* <DateTopicReview> 19/10/2563 </DateTopicReview> */}
                <DateTopicReview> {item.post_date} </DateTopicReview>
              </TopicReview>
            </TopicReviewContainer>
            {item.assets.map((image) => (
              <ImageTopic key={index} src={image.asset_path} />
            ))}
            <ContentContainer>
              <Content>
                {item.body}
                {/* โดยในช่วง Live Stream ถ่ายทอดสดของ Capcom ในงาน Tokyo Game Show
                2020 ที่มีการเผยรายละเอียดใหม่ของเกม Resident Evil Village
                เพิ่มเติม โดยคุณ Tsuyoshi Kanda
                โปรดิวเซอร์ของเกมได้บอกไว้ในช่วงหนึ่งของการถ่ายทอดสดว่า
                เขาและทีมงานนั้นต้องการที่จะส่งมอบประสบการณ์ความสยองระดับสุดยอดของเกม
                Survival Horror ในเครื่องคอนโซลรุ่นก่อนอย่าง PS4 และ Xbox One ด้วย
                ซึ่งจะทำให้เกมนี้กลายเป็นเกมแบบ Cross Gen อีกด้วย
                น่าเสียดายที่ในช่วงการ Live Stream นี้
                ทางทีมงานไม่ได้เผยข้อมูลใหม่อะไรออกมามากนัก
                เป็นเพียงแค่การสรุปสิ่งที่เคยประกาศเอาไว้แล้วอีกครั้งหนึ่งเท่านั้น
                ส่วนรายละเอียดใหม่นั้นอาจจะมีการประกาศออกมาเพิ่มเติมอีกครั้งในอนาคตข้างหน้านี้
                โดยในช่วง Live Stream ถ่ายทอดสดของ Capcom ในงาน Tokyo Game Show
                2020 ที่มีการเผยรายละเอียดใหม่ของเกม Resident Evil Village
                เพิ่มเติม โดยคุณ Tsuyoshi Kanda
                โปรดิวเซอร์ของเกมได้บอกไว้ในช่วงหนึ่งของการถ่ายทอดสดว่า
                เขาและทีมงานนั้นต้องการที่จะส่งมอบประสบการณ์ความสยองระดับสุดยอดของเกม
                Survival Horror ในเครื่องคอนโซลรุ่นก่อนอย่าง PS4 และ Xbox One ด้วย
                ซึ่งจะทำให้เกมนี้กลายเป็นเกมแบบ Cross Gen อีกด้วย
                น่าเสียดายที่ในช่วงการ Live Stream นี้
                ทางทีมงานไม่ได้เผยข้อมูลใหม่อะไรออกมามากนัก
                เป็นเพียงแค่การสรุปสิ่งที่เคยประกาศเอาไว้แล้วอีกครั้งหนึ่งเท่านั้น
                ส่วนรายละเอียดใหม่นั้นอาจจะมีการประกาศออกมาเพิ่มเติมอีกครั้งในอนาคตข้างหน้านี้ */}
              </Content>
              <Border />
              <Heading> Review by Admin </Heading>
              <AdminContainer>
                <ProfileImageAdmin />
                <NameAdmin> naratipcover </NameAdmin>
              </AdminContainer>
              <Border />
              <HeadingContainer>
                <Heading> Review Score </Heading>
              </HeadingContainer>
              <ScoreReview />
            </ContentContainer>
          </BodyContainer>
        </Container>
      ))}
    </>
  )
}

export default ReviewGame
