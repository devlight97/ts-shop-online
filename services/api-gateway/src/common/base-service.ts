import { Injectable, Logger, HttpException } from '@nestjs/common'
import { ExceptionCode } from '@packages/common'
import axios, { AxiosResponse } from 'axios'

@Injectable()
export abstract class BaseService {
  abstract baseUrl: string

  private readonly logger = new Logger(BaseService.name)

  async get(path: string) {
    return axios.get(`${this.baseUrl}${path}`)
      .then(result => result.data)
      .catch(err => { throw new HttpException(err.response?.data?.message, err.response?.data?.status || 500) })
  }

  async post(path: string, payload: any) {
    return axios.post(`${this.baseUrl}${path}`, payload)
      .then(result => result.data)
      .catch(err => { throw new HttpException(err.response?.data?.message, err.response?.data?.status || 500) })
  }

  async put(path: string, payload: any) {
    return axios.put(`${this.baseUrl}${path}`, payload)
      .then(result => result.data)
      .catch(err => { throw new HttpException(err.response?.data?.message, err.response?.data?.status || 500) })
  }

  async delete(path: string) {
    return axios.delete(`${this.baseUrl}${path}`)
      .then(result => result.data)
      .catch(err => { throw new HttpException(err.response?.data?.message, err.response?.data?.status || 500) })
  }
}
