import type { NextPage } from 'next'
import { useInput } from 'common/hooks/use-input'
import { isEmpty, isNil } from 'lodash'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { HeadTag, MainLayout } from '@components'
import { GoogleSignInButton } from '@components/google-sign-in-button'
import { useModelProvider } from '@models/model.provider'
import { identityService } from '@services/identity.service'

const SignInPage: NextPage = observer(() => {
  const router = useRouter()
  const {
    authModel: { onSignUpRequest, onSignUpFailure, signInWithGoogle, currentUser, setCurrentUser },
    appModel: { notify },
  } = useModelProvider()

  React.useEffect(() => {
    if (isNil(currentUser)) {
      return
    }

    router.push('/')
  }, [currentUser])


  const Main: React.FC = () => {
    const email = useInput('')
    const password = useInput('')

    const onSubmit = async (event: any) => {
      event.preventDefault()

      // validate
      if (isEmpty(email)) {
        return notify('Email invalid')
      } else if (isEmpty(password.value)) {
        return notify('Password invalid')
      }

      try {
        const accessToken = await identityService.signIn({
          email: email.value,
          password: password.value,
        }) as string

        const user = await identityService.verifyToken(accessToken)
        setCurrentUser(user)
        window.localStorage.setItem('access_token', accessToken)
        router.push('/')
      } catch (error) {
        notify('Opps, sign in failed. Please, check your email & password again !!')
      }
    }

    return (
      <div>
        <div>
          <div>
            <link
              href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              rel="stylesheet"
              id="bootstrap-css"
            />
            {/*---- Include the above in your HEAD tag --------*/}
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
            <div className="container">
              <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                  <h4 className="card-title mt-3 text-center">Create Account</h4>
                  <p className="text-center">Get started with your free account</p>
                  <GoogleSignInButton
                    onSuccess={signInWithGoogle}
                    onFailure={onSignUpFailure}
                    onRequest={onSignUpRequest}
                  />
                  <br />
                  <p className="divider-text">
                    <span className="bg-light">OR</span>
                  </p>
                  <form onSubmit={onSubmit} method="post">
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          {' '}
                          <i className="fa fa-envelope" />{' '}
                        </span>
                      </div>
                      <input name="email" onChange={email.onChange} value={email.value} className="form-control" placeholder="Email address" type="email" />
                    </div>{' '}
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          {' '}
                          <i className="fa fa-lock" />{' '}
                        </span>
                      </div>
                      <input name="password" onChange={password.onChange} value={password.value} className="form-control" placeholder="Create password" type="password" />
                    </div>{' '}
                    <div className="form-group">
                      <button style={{ backgroundColor: '#f7941d', borderColor: '#f7941d' }} type="submit" className="btn btn-primary btn-block">
                        {' '}
                        Sign In
                      </button>
                    </div>{' '}
                    {/* form-group// */}
                    <p className="text-center">
                      Don't have an account?
                      <Link href="/sign-up">
                        <a style={{
                          color: 'blue',
                          textDecoration: 'none',
                          marginLeft: 10,
                        }}>Sign Up</a>
                      </Link>{' '}
                    </p>
                  </form>
                </article>
              </div>{' '}
              {/* card.// */}
            </div>
            {/*container end.//*/}
            <br />
            <br />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeadTag title="Contact Page" />
      <MainLayout render={() => <Main />} />
    </div>
  )
})

export default SignInPage
