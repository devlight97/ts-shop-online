import { AxiosError } from 'axios'

import { HttpException } from '@nestjs/common/exceptions'

export class ApiException extends HttpException {
  constructor(error: string, status: number) {
    super(error, status || 500)
  }
}
