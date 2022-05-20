import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io'
import { Logger } from '@nestjs/common'

import { StreamingService } from './streaming.service'
import { isNil } from 'lodash'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class StreamingGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger(StreamingGateway.name)
  @WebSocketServer() socket: Server

  constructor(private readonly service: StreamingService) {}

  afterInit(server: Server) {
    this.logger.log('Init')
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`)
  }

  @SubscribeMessage('streamer-initiate')
  streamerInitiate(client: Socket, payload: any): void {
    const channel = this.service.findByName(payload)
    if (isNil(channel)) {
      this.service.createChannel({ name: payload, socketId: client.id })
      return
    }
    channel.socketId = client.id
  }

  @SubscribeMessage('streamer-description')
  streamerDescription(client: Socket, payload: any): void {
    const [id, description] = payload
    this.socket.to(id).emit('streamer-description', client.id, description)
  }

  @SubscribeMessage('watcher-subscribe')
  watcherSubscribe(client: Socket, name: string): void {
    const channel = this.service.findByName(name)
    if (isNil(channel)) {
      this.logger.error('channel name not found')
      return
    }
    this.socket.to(channel.socketId).emit('watcher-subscribe', client.id)
  }

  @SubscribeMessage('watcher-description')
  async watcherSendDescription(client: Socket, payload: [string, { type: string; sdp: string }]): Promise<void> {
    const [channelId, description] = payload
    this.socket.to(channelId).emit('watcher-description', client.id, description)
  }

  @SubscribeMessage('candidate')
  async candidate(client: Socket, payload: [string, { type: string; sdp: string }]): Promise<void> {
    const [receiverId, data] = payload
    this.socket.to([receiverId, client.id]).emit('candidate', data)
  }
}
