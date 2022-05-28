import React from 'react'
import type { AppProps } from 'next/app'
import { isNil } from 'lodash'

import '../styles/globals.css'
import { ModelProvider, modelProvider, useModelProvider } from 'models/model.provider'
import { setAccessToken } from '@services'
import { observer } from 'mobx-react-lite'

const MyApp: React.FC<AppProps> = observer(({ Component, pageProps }) => {
  const {
    cartModel: { loadCart },
  } = useModelProvider()

  React.useEffect(() => {
    if (!isNil(window)) {
      const accessToken = window.localStorage.getItem('access_token')
      !isNil(accessToken) && setAccessToken(accessToken)
    }

    const cartId = window.localStorage.getItem('cart_id')
    !isNil(cartId) && loadCart(cartId)
  }, [])

  return (
    <ModelProvider value={{ ...modelProvider }}>
      <Component {...pageProps} />
    </ModelProvider>
  )
})

export default MyApp
