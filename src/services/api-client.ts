import axios from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd14a460bb8e74bcda5d22018e17501cd',
  },
})
