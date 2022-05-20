import * as React from 'react'
import { ChannelModel, channelModel } from './channel.model'

interface IModelProvider {
  channelModel: ChannelModel
}

export const modelProvider: IModelProvider = {
  channelModel: channelModel,
}

const Model = React.createContext<IModelProvider>(modelProvider)
export const useModelProvider = () => React.useContext<IModelProvider>(Model)
export const ModelProvider = Model.Provider
