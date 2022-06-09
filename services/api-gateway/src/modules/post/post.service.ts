import { Inject, Injectable, Logger } from '@nestjs/common'
import { BaseService } from '../../common/base-service'

@Injectable()
export class PostService extends BaseService {
  public baseUrl = 'http://localhost:8003'
}
