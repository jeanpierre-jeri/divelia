import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://61c35faa9cfb8f0017a3eb2e.mockapi.io/api/v1'
})
