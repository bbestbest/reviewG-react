import styled from 'styled-components'

export const SubHeading = styled.div`
font-size: 30px;
padding-bottom: 1rem;
font-weight: bold;
margin-top: 3rem;
border-bottom: 3px solid #f69335;
`

export const ButtonTextarea = styled.textarea`
width: auto;
height: auto;
border: 2px solid #707070;
border-radius: 5px;
font-size: 15px;
margin: 2rem;
padding: 5px 10px 5px 10px;
color: #f04823;
&::placeholder {
  color: #707070;
}
`
export const ButtonInput = styled.input`
width: 80%;
height: 2rem;
border: 2px solid #707070;
border-radius: 5px;
font-size: 15px;
margin: 2rem;
padding: 5px 10px 5px 10px;
color: #f04823;
&::placeholder {
  color: #707070;
}
`

export const InputFile = styled.input`
margin: 2rem;
`

export const ScoreContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 30%;
padding: 2rem;
`

export const ScoreCatagories = styled.div`
font-size: 20px;
`

export const Score = styled.input`
height: auto;
border: 2px solid #707070;
border-radius: 5px;
margin: 1rem;
padding: 5px 10px 5px 10px;
color: #f04823;
`
export const ButtonSubmit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 3rem;
  margin-top: 2.5rem;
  background-color: #f04823;
  border: 2px solid #f04823;
  color: white;
  border-radius: 8px;
  transition: background-color 0.5s;
  font-size: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background-color: #d04527;
    border: 2px solid #d04527;
  }
`
