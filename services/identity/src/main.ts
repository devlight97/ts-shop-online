import { NestFactory } from '@nestjs/core'
import { IdentityModule } from './identity.module'
import { PORTS } from '@packages/env'

async function bootstrap() {
  const app = await NestFactory.create(IdentityModule)
  await app.listen(PORTS.IDENTITY_SERVICE)
}
bootstrap()
