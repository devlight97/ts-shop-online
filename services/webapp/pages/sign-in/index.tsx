import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { isNil } from 'lodash'

import { GoogleSignInButton } from '@components/google-sign-in-button'
import React from 'react'
import { useModelProvider } from '@models/model.provider'
import { observer } from 'mobx-react-lite'

const SignInPage: NextPage = observer(() => {
  const router = useRouter()
  const { authModel: { onSignUpRequest, onSignUpFailure, signInWithGoogle, currentUser } } = useModelProvider()

  React.useEffect(() => {
    if (isNil(currentUser)) {
      return
    }

    console.log(currentUser)

    router.push('/')
  }, [currentUser])

  return (
    <div>
      <h2>Sign In Page abc</h2>
      <GoogleSignInButton
        onSuccess={signInWithGoogle}
        onFailure={onSignUpFailure}
        onRequest={onSignUpRequest}
      />
    </div>
  )
})

export default SignInPage
