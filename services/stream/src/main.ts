import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORTS } from '@packages/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.listen(PORTS.VIDEO_STREAM)
}
bootstrap()
