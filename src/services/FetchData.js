import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VER = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function getData (table, references) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}?references=${references}`
    }
  ).then(response => response.data.data)
}

export async function getDataById (table, value, id) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function getDataByIdAndCatagories (table, value, catagories, id) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function countView (table, catagories, id) {
  return axios(
    {
      method: 'PATCH',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}/${id}`
    }
  )
}

export async function fetchLogin (userUsername, userPassword, tokenAPI) {
  return await axios(
    {
      method: 'POST',
      url: `${API_ENDPOINT}/${API_VER}/login`,
      headers: { ...JSON_HEADER, Authorization: `Bearer ${tokenAPI}` },
      data: JSON.stringify({
        username: userUsername,
        password: userPassword
      })
    }
  ).then(response => response)
}

export async function fetchLoginAdmin (userUsername, userPassword, tokenAPI) {
  return await axios(
    {
      method: 'POST',
      url: `${API_ENDPOINT}/${API_VER}/login_admin`,
      // headers: { ...JSON_HEADER, Authorization: `Bearer ${tokenAPI}` },
      data: JSON.stringify({
        username: userUsername,
        password: userPassword
      })
    }
  ).then(response => response)
}
// export function fetchLogin (username, password) {
//   return axios({
//     url: 'http://127.0.0.1:3333/api/v1/login',
//     method: 'post',
//     data: (({
//       username: username,
//       password: password
//     })
//     // responseType: 'json'
//   ).then(response => console.log(response))
// }

// export async function authCheck (token) {
//   return await axios(
//     {
//       method: 'GET',
//       url: `${API_ENDPOINT}/${API_VER}/login`,
//       headers: { ...JSON_HEADER, Authorization: `Bearer ${token}` }
//     }
//   ).catch((error) => {
//     console.log(error.response) // Error response from API
//   })
// }
