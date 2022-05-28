import { NestFactory } from '@nestjs/core'
import { PORTS } from '@packages/env'
import { ApiGatewayModule } from './api-gateway.module'
import { HttpExceptionFilter } from './common/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule)
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(PORTS.API_GATEWAY)
}
bootstrap()
