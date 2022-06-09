import { Module } from '@nestjs/common'
import { IdentityModule } from './modules/identity/identity.module'
import { ApiGatewayController } from './api-gateway.controller'
import { ApiGatewayService } from './api-gateway.service'
import { CartModule } from './modules/cart/cart.module'
import { ProductModule } from './modules/product/product.module'
import { PostModule } from './modules/post/post.module'

@Module({
  imports: [ProductModule, CartModule, IdentityModule, PostModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
