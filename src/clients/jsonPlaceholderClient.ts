
import axios from 'axios'

const jsonPlaceholderApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_API_URL,
})

export default jsonPlaceholderApiClient