
import axios from 'axios'

const jsonPlaceholderApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default jsonPlaceholderApiClient