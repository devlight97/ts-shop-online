import { useEffect } from 'react'

export const GoogleSignInButton: React.FunctionComponent = () => {
  // const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    // script.onload = initializeGsi
    script.async = true
    script.defer = true
    script.id = 'google-client-script'
    document.querySelector('body')?.appendChild(script)

    return () => {
      // Cleanup function that runs when component unmounts
      document.getElementById('google-client-script')?.remove()
    }
  }, []) 

  return (
    <div>
      {/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
      <div
        id="g_id_onload"
        data-client_id="878722088107-g3a1a44g52ushfvm134i5976dhn9gb54.apps.googleusercontent.com"
        data-ux_mode="redirect"
        data-login_uri="/api/identity/auth/google/callback"
      ></div>
      <div className="g_id_signin" data-type="standard" data-size="large" data-width="300"></div>
    </div>
  )
}
