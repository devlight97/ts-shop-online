import type { NextPage } from 'next'
import Link from 'next/link'

import React from 'react'

import { HeadTag, MainLayout } from '@components'
import { GoogleSignInButton } from '@components/google-sign-in-button'
import { useModelProvider } from '@models/model.provider'

import styles from './sign-up.module.css'
import { useInput } from 'common/hooks/use-input'
import { identityService } from '@services/identity.service'
import Router from 'next/router'
import { isEmpty } from 'lodash'

const SignUpPage: NextPage = () => {
  const {
    authModel: { onSignUpRequest, onSignUpFailure, signInWithGoogle, setCurrentUser },
    appModel: { notify },
  } = useModelProvider()


  const Main: React.FC = () => {
    const email = useInput('')
    const firstName = useInput('')
    const lastName = useInput('')
    const phoneNumber = useInput('')
    const address = useInput('')
    const password = useInput('')
    const repeatPassword = useInput('')

    const onSubmit = async (event: any) => {
      event.preventDefault()

      // validate
      if (isEmpty(email)) {
        return notify('Email invalid')
      } else if (isEmpty(firstName.value)) {
        return notify('First name invalid')
      } else if (isEmpty(lastName.value)) {
        return notify('Last name invalid')
      } else if (isEmpty(phoneNumber.value)) {
        return notify('phoneNumber invalid')
      } else if (isEmpty(password.value)) {
        return notify('password invalid')
      } else if (isEmpty(repeatPassword.value)) {
        return notify('Repeat password invalid')
      }

      try {
        const accessToken = await identityService.signUp({
          email: email.value,
          firstName: firstName.value,
          lastName: lastName.value,
          phoneNumber: phoneNumber.value,
          address: address.value,
          password: password.value,
        }) as string

        const user = await identityService.verifyToken(accessToken)
        setCurrentUser(user)
        window.localStorage.setItem('access_token', accessToken)
        Router.push('/')
      } catch (error) {
        Router.push('/error?Sign Up Failed !!')
      }
    }

    return (
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
                <p className={styles['divider-text']}>
                  <span className="bg-light">OR</span>
                </p>
                <form onSubmit={onSubmit} method="post">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-user" />{' '}
                      </span>
                    </div>
                    <input onChange={firstName.onChange} value={firstName.value} className="form-control" placeholder="First name" type="text" />
                  </div>{' '}
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-user" />{' '}
                      </span>
                    </div>
                    <input name="lastName" onChange={lastName.onChange} value={lastName.value} className="form-control" placeholder="Last name" type="text" />
                  </div>{' '}
                  {/* form-group// */}
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-envelope" />{' '}
                      </span>
                    </div>
                    <input name="email" onChange={email.onChange} value={email.value} className="form-control" placeholder="Email address" type="email" />
                  </div>{' '}
                  {/* form-group// */}
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-phone" />{' '}
                      </span>
                    </div>
                    <input name="phoneNumber" onChange={phoneNumber.onChange} value={phoneNumber.value} className="form-control" placeholder="Phone number" type="text" />
                  </div>{' '}
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-address-card" />{' '}
                      </span>
                    </div>
                    <input name="address" onChange={address.onChange} value={address.value} className="form-control" placeholder="Address" type="text" />
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
                  {/* form-group// */}
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        {' '}
                        <i className="fa fa-lock" />{' '}
                      </span>
                    </div>
                    <input name="repeatPassword" onChange={repeatPassword.onChange} value={repeatPassword.value} className="form-control" placeholder="Repeat password" type="password" />
                  </div>{' '}
                  {/* form-group// */}
                  <div className="form-group">
                    <button style={{ backgroundColor: '#f7941d', borderColor: '#f7941d' }} type="submit" className="btn btn-primary btn-block">
                      {' '}
                      Create Account
                    </button>
                  </div>{' '}
                  {/* form-group// */}
                  <p className="text-center">
                    Have an account?
                    <Link href="/sign-in">
                      <a style={{
                        color: 'blue',
                        textDecoration: 'none',
                        marginLeft: 10,
                      }}>Sign In</a>
                    </Link>
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
    )
  }

  return (
    <div>
      <HeadTag title="Sign Up" />
      <MainLayout render={() => <Main />} />
    </div>
  )
}

export default SignUpPage
