import { GoogleSignInResponse } from 'interfaces/auth.interface'
import { BaseService } from './base-service'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  imageUrl: string
}

export class IdentityService extends BaseService {
  public baseUrl = '/api/v1/identity'

  public async googleSignIn(data: GoogleSignInResponse): Promise<string> {
    return this.post<string>(`/auth/google/sign-in`, data)
  }

  public async verifyToken(accessToken: string) {
    return this.get<IUser>(`/auth/token/verify?access_token=${accessToken}`)
  }
}

export const identityService = new IdentityService()
