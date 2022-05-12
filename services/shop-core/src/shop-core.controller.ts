import { Controller, Get } from '@nestjs/common'
import { ShopCoreService } from './shop-core.service'

@Controller()
export class ShopCoreController {
  constructor(private readonly svc: ShopCoreService) {}

  @Get()
  getHello(): string {
    return this.svc.getHello()
  }
}
