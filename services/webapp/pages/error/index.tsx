import type { NextPage } from 'next'
import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { ERROR_LOGIN_FAIL, displayErrorReason } from './constants'

const ErrorText = styled.div`
    color: red;
`

const Error: NextPage = () => {
	const router = useRouter()
	const reason = router.query?.reason as string || ''

	return (
		<div>
			<ErrorText>{displayErrorReason(reason?.toUpperCase())}</ErrorText>
			Something is fail !!
		</div>
	)
}

export default Error
