import { Controller, Get, Param, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { Channel } from '@packages/socket'
import { StreamingService } from './streaming.service'

@Controller('/streaming')
export class StreamingController {
  constructor(private readonly streamingSvc: StreamingService) {}

  @Get('hello')
  getHello(): string {
    return 'Hello Streaming World'
  }

  @Get('channel')
  async getChannels(): Promise<Channel[]> {
    return this.streamingSvc.getChannels()
  }

  @Post('channel')
  async createChannel(@Req() req: Request): Promise<void> {
    const channel: Channel = req.body
    return this.streamingSvc.createChannel(channel)
  }

  @Get('channel/:id')
  async getChannelById(@Param('id') id: string): Promise<Channel> {
    return this.streamingSvc.getChannelById(id)
  }
}
