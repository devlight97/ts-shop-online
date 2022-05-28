import { Injectable } from '@nestjs/common'
import { BaseService } from '../../common/base-service'

@Injectable()
export class CartService extends BaseService {
  public baseUrl = 'http://localhost:8003'
}
