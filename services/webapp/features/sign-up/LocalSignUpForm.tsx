export const LocalSignUpForm: React.FC = () => {
  return (
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
  )
}
