import styled from 'styled-components'

export const Container = styled.div`
  background: #003d59;
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1.5rem 4rem 1.5rem 4rem;
`
export const BodyContainer = styled.div`
  background: white;
  width: 90%;
  height: auto;
  border-radius: 2rem;
  padding: 4rem;
`

// TopicReview start
export const TopicReviewContainer = styled.div`
  height: auto;
  width: auto;
`

export const TopicReview = styled.div`
  font-size: 30px;
  line-height: 1.3;
  height: auto;
  width: auto;
  font-weight: bold;
  margin-bottom: 2rem;
`
export const DateTopicReview = styled.div`
  padding: 1rem;
  font-size: 15px;
`
// TopicReview end

// start Image
export const ImageTopic = styled.div`
  height: 50vh;
  width: 70%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
// end Image

// Content start
export const ContentContainer = styled.div`
  height: auto;
  width: auto;
  margin: 2rem 0 2rem 0;
`
export const Content = styled.div`
  font-size: 20px;
  line-height: 1.6;
`
// Contemt end

// Heading and Boder start

export const Border = styled.div`
  width: auto;
  margin: 2.5rem 0 2.5rem 0;
  border-bottom: 4px solid  #003d59;
`
export const HeadingContainer = styled.div`
  padding: 2rem 0 2rem 0;
`

// Heading and Boder end

// admin start

export const AdminContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  width: auto;
  height: auto;
`

export const Admin = styled.div`
  margin-right: 6rem;
  width: auto;
  height: auto;
`
export const Heading = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 10px;
  margin-bottom: 3rem;
  padding: 1.4rem;
  font-size: 23px;
  font-weight: bold;
  color: white;
  background-color: #f69335;
`
export const ProfileAdmin = styled.div`
    display: flex;
    padding-left: 3rem;
`

export const ProfileImageAdmin = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const NameAdmin = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 2.4rem;
  color: #003d59;
`
// admin end
