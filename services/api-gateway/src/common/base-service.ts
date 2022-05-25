import { Inject, Injectable, Logger } from '@nestjs/common'
import axios, { AxiosResponse } from 'axios'

@Injectable()
export abstract class BaseService {
  abstract baseUrl: string

  async get(path: string) {
    try {
      const result: AxiosResponse = await axios.get(`${this.baseUrl}${path}`)
      return result.data
    } catch (error) {
      throw error
    }
  }

  async post(path: string, payload: any) {
    try {
      const result: AxiosResponse = await axios.post(`${this.baseUrl}${path}`, payload)
      return result.data
    } catch (error) {
      throw error
    }
  }

  async put(path: string, payload: any) {
    try {
      const result: AxiosResponse = await axios.put(`${this.baseUrl}${path}`, payload)
      return result.data
    } catch (error) {
      throw error
    }
  }

  async delete(path: string, payload: any) {
    try {
      const result: AxiosResponse = await axios.delete(`${this.baseUrl}${path}`)
      return result.data
    } catch (error) {
      throw error
    }
  }
}
