import { HttpStatus, Injectable } from '@nestjs/common'
import axios, { AxiosResponse } from 'axios'
import { isNil } from 'lodash'
import { ApiException } from './api-exception'

const handleError = (error: any) => {
  if (isNil(error.response)) {
    throw new ApiException('', HttpStatus.INTERNAL_SERVER_ERROR)
  }
  throw new ApiException(error.response?.data?.message, error.response?.data?.status)
}

@Injectable()
export abstract class BaseService {
  abstract baseUrl: string

  async get(path: string) {
    try {
      const result: AxiosResponse = await axios.get(`${this.baseUrl}${path}`)
      return result.data
    } catch (error) {
      handleError(error)
    }
  }

  async post(path: string, payload: any) {
    try {
      const result: AxiosResponse = await axios.post(`${this.baseUrl}${path}`, payload)
      return result.data
    } catch (error) {
      handleError(error)
    }
  }

  async put(path: string, payload: any) {
    try {
      const result: AxiosResponse = await axios.put(`${this.baseUrl}${path}`, payload)
      return result.data
    } catch (error) {
      handleError(error)
    }
  }

  async delete(path: string) {
    try {
      const result: AxiosResponse = await axios.delete(`${this.baseUrl}${path}`)
      return result.data
    } catch (error) {
      handleError(error)
    }
  }
}
