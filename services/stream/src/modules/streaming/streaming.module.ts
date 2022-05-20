import { Module } from '@nestjs/common'
import { StreamingController } from './streaming.controller'
import { StreamingGateway } from './streaming.gateway'
import { StreamingService } from './streaming.service'

@Module({
  imports: [],
  controllers: [StreamingController],
  providers: [StreamingGateway, StreamingService],
})
export class StreamingModule {}
