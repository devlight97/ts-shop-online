import { useEffect, useState } from "react"

export const GoogleSignInButton = () => {
	const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false)

	useEffect(() => {
		if (gsiScriptLoaded) return

		const initializeGsi = () => {
			// Typescript will complain about window.google
			// Add types to your `react-app-env.d.ts` or //@ts-ignore it.
			if (!window.google || gsiScriptLoaded) return

			setGsiScriptLoaded(true)
			window.google.accounts.id.initialize({
				client_id: '878722088107-g3a1a44g52ushfvm134i5976dhn9gb54.apps.googleusercontent.com',
				callback: handleGoogleSignIn,
			})
		}

		const script = document.createElement("script")
		script.src = "https://accounts.google.com/gsi/client"
		script.onload = initializeGsi
		script.async = true
		script.id = "google-client-script"
		document.querySelector("body")?.appendChild(script)

		return () => {
			// Cleanup function that runs when component unmounts
			window.google?.accounts.id.cancel()
			document.getElementById("google-client-script")?.remove()
		}
	}, [])




	const handleGoogleSignIn = (res: CredentialResponse) => {
		if (!res.clientId || !res.credential) return
	}

	return (
		<div>
			{/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
			<div id="g_id_onload"
				data-client_id="878722088107-g3a1a44g52ushfvm134i5976dhn9gb54.apps.googleusercontent.com"
				data-ux_mode="redirect"
				data-login_uri="http://localhost:8008/auth/google/callback">
			</div>
			<div className="g_id_signin" data-type="standard"></div>
		</div>
	)
}
