import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React from 'react'

import { useModelProvider } from '@models/model.provider'

const SignOutPage: React.FC = observer(() => {
  const {
    authModel: { setCurrentUser }
  } = useModelProvider()
  const router = useRouter()

  React.useEffect(() => {
    window.localStorage.removeItem('access_token')
    setCurrentUser(null)
    router.push('/sign-in')

  }, [])
  return (
    <></>
  )
})

export default SignOutPage
