import React from 'react'
import type { AppProps } from 'next/app'
import { isNil } from 'lodash'

import '../styles/globals.css'
import { ModelProvider, modelProvider, useModelProvider } from 'models/model.provider'
import { setAccessToken } from '@services'
import { observer } from 'mobx-react-lite'
import { identityService } from '@services/identity.service'

const MyApp: React.FC<AppProps> = observer(({ Component, pageProps }) => {
  const {
    cartModel: { loadCart },
    authModel: { setCurrentUser }
  } = useModelProvider()

  React.useEffect(() => {
    if (!isNil(window)) {
      const accessToken = window.localStorage.getItem('access_token')
      if (!isNil(accessToken)) {
        identityService.verifyToken(accessToken)
          .then(user => setCurrentUser(user))
          .catch(err => {
            console.log(err)
          })
      }
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
