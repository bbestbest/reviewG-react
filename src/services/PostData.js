/* global fetch */

export default function PostData () {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      topic: 'actiondddddd',
      body: 'actiondddddd',
      writer: 'actiondddddd',
      catagories: 'actiondddddd'
    })
  }
  fetch('http://127.0.0.1:3333/api/v1/posts', requestOptions)
    .then(response => response.json())
    .then(response => console.log(response))
  // .then(async response => {
  //   const data = await response.json()
  //   if (!response.ok) {
  //     const error = (data && data.message) || response.status
  //     return Promise.reject(error)
  //   }
  //   this.setState({ postId: data.id })
  // })
  // .catch(error => {
  //   this.setState({ errorMessage: error.toString() })
  //   console.error('There was an error!', error)
  // })
}
