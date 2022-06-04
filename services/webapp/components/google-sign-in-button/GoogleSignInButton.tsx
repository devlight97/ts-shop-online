import React, { useEffect } from 'react'

const GOOGLE_CLIENT_ID = '878722088107-g3a1a44g52ushfvm134i5976dhn9gb54.apps.googleusercontent.com'
const SignInButtonId = 'google-sign-in-button'

interface IProps {
  onSuccess: Function
  onFailure: Function
  onRequest: Function
}

export const GoogleSignInButton: React.FC<IProps> = ({
  onSuccess, onFailure, onRequest
}) => {
  const [gsiScriptLoaded, setGsiScriptLoaded] = React.useState(null)
  useEffect(() => {
    const handleGoogleSignIn = (response: CredentialResponse) => {
      onSuccess(response)
    }
    const initializeGsi = () => {
      if (!window.google || gsiScriptLoaded) {
        return
      }

      setGsiScriptLoaded(true)
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn,
      })

      window.google.accounts.id.renderButton(
        document.getElementById(SignInButtonId),
        { type: 'standard', size: 'large' },
      )

      window.google.accounts.id.prompt()
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.onload = initializeGsi
    script.defer = true
    script.id = 'google-client-script'
    document.querySelector('body')?.appendChild(script)

    return () => {
      document.getElementById('google-client-script')?.remove()
    }
  }, [])

  return (
    <div id={SignInButtonId} />
  )
}
