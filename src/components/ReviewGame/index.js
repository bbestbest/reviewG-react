import React from 'react'
import { Reset } from 'styled-reset'
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
  Heading,
  AdminContainer
} from './reviewGameStyled'

function ReviewGame () {
  return (
    <>
      <Reset />
      <Container>
        <BodyContainer>
          <TopicReviewContainer>
            <TopicReview>
              ภาพวาดเกม The Last of Us Part II จาก Yoji Shinkawa แห่ง Kojima
              Productions เพื่อเฉลิมฉลองวัน The Last of Us Day
              <DateTopicReview> 19/10/2563 </DateTopicReview>
            </TopicReview>
          </TopicReviewContainer>
          <ImageTopic />
          <ContentContainer>
            <Content>
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
              ส่วนรายละเอียดใหม่นั้นอาจจะมีการประกาศออกมาเพิ่มเติมอีกครั้งในอนาคตข้างหน้านี้
            </Content>
            <Border />
            <AdminContainer>
              <Heading> Review by Admin </Heading>
            </AdminContainer>
            <Border />
          </ContentContainer>
        </BodyContainer>
      </Container>
    </>
  )
}

export default ReviewGame
