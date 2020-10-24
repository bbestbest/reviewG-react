/* global fetch */

function CommentData () {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment: 'toptoptoptoptopotp55'
    })
  }
  fetch('http://127.0.0.1:3333/api/v1/comments', requestOptions)
    .then(response => response.json())
    .then(response => console.log(response))
}

export default CommentData
