import axios from 'axios'

export abstract class ServiceBase<T> {
  private host: string = 'http://localhost:8005'
  public abstract serviceName: string
  // public baseUrl = `${this.host}/${this.serviceName}`

  async getOne(docName: string): Promise<[T, Error]> {
    try {
      const response = await axios.get(`${this.host}/${this.serviceName}/${docName}`)
      return [response.data, null]
    } catch (error) {
      return [null, error]
    }
  }

  async get(docName: string): Promise<[T[], Error]> {
    try {
      const response = await axios.get(`${this.host}/${this.serviceName}/${docName}`)
      return [response.data, null]
    } catch (error) {
      return [null, error]
    }
  }

  async post(docName: string, payload: any): Promise<[T, Error]> {
    try {
      const response = await axios.post(`${this.host}/${this.serviceName}/${docName}`, { ...payload })
      return [response.data, null]
    } catch (error) {
      return [null, error]
    }
  }

  delete() {}

  put() {}
}
