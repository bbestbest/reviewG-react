/* global fetch */

function ScoreUserData () {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      story: 2,
      gameplay: 3,
      performance: 4,
      graphic: 5
    })
  }
  fetch('http://127.0.0.1:3333/api/v1/user_scores', requestOptions)
    .then(response => response.json())
    .then(response => console.log(response))
}

export default ScoreUserData
