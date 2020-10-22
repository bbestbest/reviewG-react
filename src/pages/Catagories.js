import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Catagories/CatagoriesBody'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

function Catagories () {
  const { catagories } = useParams()

  return (
    <>
      <Navbar />
      <Body> {catagories} </Body>
      <Footer />
    </>
  )
}
export default Catagories
