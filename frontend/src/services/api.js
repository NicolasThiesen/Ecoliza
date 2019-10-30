import axios from 'axios'

const api = axios.create({
  baseURL: 'http://ec2-18-231-115-86.sa-east-1.compute.amazonaws.com:3333'
})

export default api
