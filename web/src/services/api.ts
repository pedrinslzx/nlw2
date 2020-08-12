import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proffy-0.herokuapp.com'
})

export default api 
