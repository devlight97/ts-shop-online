import { WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import { User } from './streaming.interface'
import { Channel } from '@packages/socket'
import { isNil } from 'lodash'

export class StreamingService {
  @WebSocketServer() socket: Server

  private channels: Channel[] = [
    { name: 'name1', socketId: null },
    { name: 'name2', socketId: null },
    { name: 'name3', socketId: null },
  ]
  private users: User[] = []

  public async createChannel(channel: Channel): Promise<void> {
    this.channels.push(channel)
  }

  public async createUser(user: User): Promise<void> {
    this.users.push(user)
  }

  public async getChannels(): Promise<Channel[]> {
    return this.channels
  }

  public async getChannelById(name: string): Promise<Channel> {
    return this.channels.find((chl) => chl.name === name)
  }

  public async setLocalDescription(socketId: string, localDescription: any): Promise<Channel> {
    const channel = this.channels.find(chl => socketId === chl.socketId)
    if (isNil(channel)) {
      return
    }
    channel.localDescription = localDescription
    return channel
  }

  public findByName(name: string) {
    return this.channels.find(chl => chl.name === name)
  }
}
