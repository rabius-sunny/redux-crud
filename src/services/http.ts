import axios, { AxiosResponse } from 'axios'

const baseURL = process.env.REACT_APP_API_SERVER

const instance = axios.create({
  baseURL,
  timeout: 20000
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (slug: string) => instance.get(slug).then(responseBody),

  post: (slug: string, body: object) =>
    instance.post(slug, body).then(responseBody),

  put: (slug: string, body: object) =>
    instance.patch(slug, body).then(responseBody),

  delete: (slug: string) => instance.delete(slug).then(responseBody)
}

export default requests
