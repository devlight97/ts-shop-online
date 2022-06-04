import { Injectable } from '@nestjs/common'
import {IDENTITY_SERVICE_HOST} from '@packages/env'
import { BaseService } from 'services/api-gateway/src/common/base-service'

@Injectable()
export class AuthService extends BaseService {
  public baseUrl = IDENTITY_SERVICE_HOST

  getHello(): string {
    return 'Hello World!'
  }
}
