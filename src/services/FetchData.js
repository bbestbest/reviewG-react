import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VER = 'api/v1'

export async function getData (table, references) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}?references=${references}`
    }
  ).then(response => response.data.data)
}

export async function getDataByCatagories (table, catagories, references) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}?references=${references}`
    }
  ).then(response => response.data.data)
}

export async function getDataById (table, value, catagories, id) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function getImage (table, id, value) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}
