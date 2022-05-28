import { Injectable } from '@nestjs/common'
import { BaseService } from '../../common/base-service'
import {IDENTITY_SERVICE_HOST} from '@packages/env'

@Injectable()
export class IdentityService extends BaseService {
  public baseUrl = IDENTITY_SERVICE_HOST

  getHello(): string {
    return 'Hello World!'
  }
}
