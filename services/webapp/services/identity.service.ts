import { GoogleSignInResponse } from 'interfaces/auth.interface'

import { BaseService } from './base-service'

export interface IUser {
  id: number
  email: string
  firstName: string
  lastName: string
  imageUrl: string
  address: string
  phoneNumber: string
}

export interface ISignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
  phoneNumber: string
}

export class IdentityService extends BaseService {
  public baseUrl = '/api/v1/identity'

  public async googleSignIn(data: GoogleSignInResponse): Promise<string> {
    return this.post<string>(`/auth/google/sign-in`, data)
  }

  public async verifyToken(accessToken: string) {
    return this.get<IUser>(`/auth/token/verify?access_token=${accessToken}`)
  }

  public async signUp(formData: ISignUpForm) {
    return this.post(`/auth/local/sign-up`, formData)
  }

  public async signIn(signInData: { email: string, password: string }) {
    return this.post(`/auth/local/sign-in`, signInData)
  }
}

export const identityService = new IdentityService()
