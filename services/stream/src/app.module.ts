import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ChattingGateway } from './modules/chatting/chatting.gateway'
import { StreamingModule } from './modules/streaming/streaming.module'

@Module({
  imports: [StreamingModule, ChattingGateway],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
