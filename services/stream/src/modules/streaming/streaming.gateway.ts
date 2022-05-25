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

import { STREAMING } from '@packages/socket'
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

  @SubscribeMessage(STREAMING.STREAMER_INITIATE)
  streamerInitiate(client: Socket, payload: any): void {
    const channel = this.service.findByName(payload)
    if (isNil(channel)) {
      this.service.createChannel({ name: payload, socketId: client.id })
      return
    }
    channel.socketId = client.id
  }

  @SubscribeMessage(STREAMING.STREAMER_SEND_DESCRIPTION)
  streamerSendDescription(client: Socket, payload: any): void {
    const [id, description] = payload
    this.socket.to(id).emit(STREAMING.STREAMER_SEND_DESCRIPTION, client.id, description)
  }

  @SubscribeMessage(STREAMING.WATCHER__SUBSCRIBE)
  watcherSubscribe(client: Socket, name: string): void {
    const channel = this.service.findByName(name)
    if (isNil(channel)) {
      this.logger.error('channel name not found')
      return
    }
    this.socket.to(channel.socketId).emit(STREAMING.WATCHER__SUBSCRIBE, client.id)
  }

  @SubscribeMessage(STREAMING.WATCHER_SEND_DESCRIPTION)
  async watcherSendDescription(client: Socket, payload: [string, { type: string; sdp: string }]): Promise<void> {
    const [channelId, description] = payload
    this.socket.to(channelId).emit(STREAMING.WATCHER_SEND_DESCRIPTION, client.id, description)
  }

  @SubscribeMessage(STREAMING.ADD_CANDIDATE)
  async candidate(client: Socket, payload: [string, { type: string; sdp: string }]): Promise<void> {
    const [receiverId, data] = payload
    this.socket.to([receiverId, client.id]).emit(STREAMING.ADD_CANDIDATE, data)
  }
}
