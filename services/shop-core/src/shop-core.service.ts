import { Injectable } from '@nestjs/common'

@Injectable()
export class ShopCoreService {
  getHello(): string {
    return 'Hello World!'
  }
}
