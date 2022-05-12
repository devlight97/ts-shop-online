import { NestFactory } from '@nestjs/core'
import { PORTS } from '@packages/env'
import { ShopCoreModule } from './shop-core.module'

async function bootstrap() {
  const app = await NestFactory.create(ShopCoreModule)
  await app.listen(PORTS.SHOP_CORE_SERVICE)
}
bootstrap()
