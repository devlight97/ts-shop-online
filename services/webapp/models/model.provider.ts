import * as React from 'react'
import { ChannelModel, channelModel } from './channel.model'
import { AuthModel, authMoel } from './auth.model'
import { ProductModel, productModel } from './product.model'
import { AppModel, appModel } from './app.model'
import {CartModel,cartModel} from './cart.model'

interface IModelProvider {
  channelModel: ChannelModel
  authModel: AuthModel
  productModel: ProductModel
  appModel: AppModel
  cartModel: CartModel
}

export const modelProvider: IModelProvider = {
  channelModel: channelModel,
  authModel: authMoel,
  productModel: productModel,
  appModel: appModel,
  cartModel: cartModel
}

const Model = React.createContext<IModelProvider>(modelProvider)
export const useModelProvider = () => React.useContext<IModelProvider>(Model)
export const ModelProvider = Model.Provider
