import { Module } from '@nestjs/common'
import { StreamingGateway } from './streaming.gateway'

@Module({
  imports: [],
  controllers: [],
  providers: [StreamingGateway],
})
export class StreamingModule {}
