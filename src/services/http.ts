import axios, { AxiosResponse } from 'axios'
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  timeout: 20000
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('Api is being called')
  return {
    ...config,
    headers: {
      Authorization: JSON.parse(localStorage.getItem('token') || '')
    }
  }
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  put: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody)
}

export default requests
