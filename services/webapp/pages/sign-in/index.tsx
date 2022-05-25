import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { isNil } from 'lodash'

import { GoogleSignInButton } from '@components/google-sign-in-button'
// import { GoogleSignIn } from '@components/google-sign-in.component'

const SignInPage: NextPage = () => {
	const router = useRouter()
	const accessToken = router.query?.access_token as string

	if (isNil(accessToken)) {
		// const error = router.query?.error as string
	}

	return (
		<div>
			<h2>Sign In Page abc</h2>
			<GoogleSignInButton />
		</div>
	)
}

export default SignInPage
