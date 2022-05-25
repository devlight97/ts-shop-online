import type { NextPage } from 'next'

import { MainLayout, HeadTag } from '@components'
import { GoogleSignInButton } from '@components/google-sign-in-button'

import styles from './sign-up.module.css'

const SignUpPage: NextPage = () => {
  const Main: React.FC = () => (
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
              <GoogleSignInButton />
              <br />
              <p className={styles['divider-text']}>
                <span className="bg-light">OR</span>
              </p>
              <form>
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-user" />{' '}
                    </span>
                  </div>
                  <input name="" className="form-control" placeholder="Full name" type="text" />
                </div>{' '}
                {/* form-group// */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-envelope" />{' '}
                    </span>
                  </div>
                  <input name="" className="form-control" placeholder="Email address" type="email" />
                </div>{' '}
                {/* form-group// */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-phone" />{' '}
                    </span>
                  </div>
                  <input name="" className="form-control" placeholder="Phone number" type="text" />
                </div>{' '}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-lock" />{' '}
                    </span>
                  </div>
                  <input className="form-control" placeholder="Create password" type="password" />
                </div>{' '}
                {/* form-group// */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-lock" />{' '}
                    </span>
                  </div>
                  <input className="form-control" placeholder="Repeat password" type="password" />
                </div>{' '}
                {/* form-group// */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {' '}
                    Create Account
                  </button>
                </div>{' '}
                {/* form-group// */}
                <p className="text-center">
                  Have an account? <a href="">Log In</a>{' '}
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

  return (
    <div>
      <HeadTag title="Sign Up" />
      <MainLayout render={() => <Main />} />
    </div>
  )
}

export default SignUpPage
