import React from 'react'
import ReactStars from 'react-stars'

const ratingChanged = newRating => {
  console.log(newRating)
}

function Stars () {
  return (
    <>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={60}
        color1='#003d59'
        color2='#f69335'
      />
    </>
  )
}

export default Stars
