import { action, makeObservable, observable, runInAction } from 'mobx'
import { isNil } from 'lodash'

// import { Channel } from '@packages/socket'
import { streamingService } from '@services/streaming.service'

export interface Channel {
  name: string
  socketId: string
  localDescription?: { type: string; sdp: string }
}


export class ChannelModel {
  @observable channels: Channel[] = []

  constructor() {
    makeObservable(this)
  }

  @action
  loadChannels = async () => {
    const [channels, err] = await streamingService.get('channel')
    if (!isNil(err)) {
      return
    }
    runInAction(() => {
      this.channels = channels
    })
  }

  @action
  createChannel = async (channel: Channel, callback?: Function) => {
    const [_, err] = await streamingService.post('channel', channel)
    if (!isNil(err)) {
      return
    }
    this.loadChannels()
    callback()
  }
}

export const channelModel = new ChannelModel()
