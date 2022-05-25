import { NestFactory } from '@nestjs/core'
import { PORTS } from '@packages/env'
import { ApiGatewayModule } from './api-gateway.module'

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule)
  await app.listen(PORTS.SHOP_CORE_SERVICE)
}
bootstrap()
