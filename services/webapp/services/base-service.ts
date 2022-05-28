import axios from 'axios'

let client = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

export abstract class BaseService {
  abstract baseUrl: string
  protected async get<T>(path: string): Promise<T> {
    return (await client.get(`${this.baseUrl}${path}`)).data
  }

  protected async post<T>(path: string, body: any): Promise<T> {
    return (await client.post(`${this.baseUrl}${path}`, body)).data
  }

  protected async put(path: string, body: any) {
    return (await client.put(`${this.baseUrl}${path}`, body)).data
  }

  protected async delete(path: string) {
    return (await client.delete(`${this.baseUrl}${path}`))
  }
}

export const setAccessToken = (accessToken: string) => {
  client = axios.create({
    timeout: 5000,
    headers: {
      // if localStorage is not defined, it wont throw error
      Authorization: accessToken,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  })
}
