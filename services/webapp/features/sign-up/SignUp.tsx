import { GoogleSignInButton } from '@components'
import { LocalSignUpForm } from './LocalSignUpForm'

export const SignUp: React.FC = () => {
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
              <GoogleSignInButton />
              <br />
              <p className="divider-text">
                <span className="bg-light">OR</span>
              </p>
              <LocalSignUpForm />
            </article>
          </div>{' '}
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}
