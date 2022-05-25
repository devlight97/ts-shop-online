import { ServiceBase } from './service-base'
import { Channel } from '@packages/socket'

class StreamingService extends ServiceBase<Channel> {
  public serviceName = 'streaming'
}

export const streamingService = new StreamingService()
