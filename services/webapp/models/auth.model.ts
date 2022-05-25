import { action, makeObservable, observable } from "mobx"

export class AuthModel {
  @observable isSignedIn: boolean = false
  @observable error: string = ''

  constructor() {
    makeObservable(this)
  }

  @action
  signIn = async () => {
  }

  @action
  signUp = async () => {}

  @action
  signInWithGoogle = async () => {}

  @action
  onSignUpSuccess = async () => {}

  @action
  onSignUpFailure = async () => {}

  @action
  onSignUpRequest = async () => {
    this.error = ''
  }
}

export const authMoel = new AuthModel()
