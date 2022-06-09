import { setAccessToken } from "@services"
import { identityService, IUser } from "@services/identity.service"
import { GoogleSignInResponse } from "interfaces/auth.interface"
import { action, makeObservable, observable } from "mobx"

export class AuthModel {
  @observable isSignedIn: boolean = false
  @observable error: string = ''
  @observable currentUser: IUser = null

  constructor() {
    makeObservable(this)
  }

  @action setCurrentUser = (user: IUser) => {
    this.currentUser = user
  }

  @action
  signIn = async () => {
    this.isSignedIn = true
    
  }

  @action
  signOut = async () => {
    this.isSignedIn = false
  }

  @action
  signUp = async () => { }

  @action
  signInWithGoogle = async (googleSignInData: GoogleSignInResponse) => {
    const accessToken = await identityService.googleSignIn(googleSignInData)
    window.localStorage.setItem('access_token', accessToken)
    setAccessToken(accessToken)
    const user = await identityService.verifyToken(accessToken)
    this.setCurrentUser(user)
  }

  @action
  onSignUpSuccess = async (googleSignInData: GoogleSignInResponse) => {
    await identityService.googleSignIn(googleSignInData)
  }

  @action
  onSignUpFailure = async () => { }

  @action
  onSignUpRequest = async () => {
    this.error = ''
  }
}

export const authMoel = new AuthModel()
