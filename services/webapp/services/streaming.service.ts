import { ServiceBase } from './service-base'
// import { Channel } from '@packages/socket'

export interface Channel {
  name: string
  socketId: string
  localDescription?: { type: string; sdp: string }
}


class StreamingService extends ServiceBase<Channel> {
  public serviceName = 'streaming'
}

export const streamingService = new StreamingService()
