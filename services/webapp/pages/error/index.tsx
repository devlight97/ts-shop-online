import type { NextPage } from 'next'
import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { HeadTag, MainLayout } from '@components'

const ErrorText = styled.div`
    color: red;
`

const Error: NextPage = () => {
	const router = useRouter()
	const [reason, setReason] = React.useState(null)

	React.useEffect(() => {
		if (!router.isReady) {
			return
		}
		setReason(router.query?.reason as string || '')
	}, [router.isReady])

	const Main: React.FC = () => (
		<div>
			{/* <ErrorText>{displayErrorReason(reason?.toUpperCase())}</ErrorText> */}
			<ErrorText>{reason?.toUpperCase()}</ErrorText>
		</div>
	)

	return (
		<div>
			<HeadTag title="Contact Page" />
			<MainLayout render={() => <Main />} />
		</div>
	)
}

export default Error
