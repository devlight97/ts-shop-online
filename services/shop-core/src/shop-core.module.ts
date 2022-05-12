import { Module } from '@nestjs/common'
import { ShopCoreController } from './shop-core.controller'
import { ShopCoreService } from './shop-core.service'

@Module({
  imports: [],
  controllers: [ShopCoreController],
  providers: [ShopCoreService],
})
export class ShopCoreModule {}
