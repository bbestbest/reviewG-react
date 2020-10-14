import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import withHelmet from '../utils/withHelmet'

function Home () {
  return (
    <>
      <Navbar />
      <Body>Home</Body>
      <Footer />
    </>
  )
}

export default withHelmet('review-G')(Home)
