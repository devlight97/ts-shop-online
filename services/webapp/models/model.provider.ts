import * as React from 'react'
import { ChannelModel, channelModel } from './channel.model'
import { AuthModel, authMoel } from './auth.model'

interface IModelProvider {
  channelModel: ChannelModel
  authModel: AuthModel
}

export const modelProvider: IModelProvider = {
  channelModel: channelModel,
  authModel: authMoel,
}

const Model = React.createContext<IModelProvider>(modelProvider)
export const useModelProvider = () => React.useContext<IModelProvider>(Model)
export const ModelProvider = Model.Provider
