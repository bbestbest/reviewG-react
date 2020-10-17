import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VER = 'api/v1'

export async function getData (table) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}`
    }
  ).then(response => response.data.data)
}
