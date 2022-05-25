import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserTokenType } from '@packages/common'
import { WEB_APP_HOST } from '@packages/env'

import { GoogleOauth2Provider } from './google-oauth2.provider'

@Injectable()
export class GoogleMechanismService {
  @Inject() ggOAuth2Provider: GoogleOauth2Provider
  @Inject() jwtSvc: JwtService

  getHello(): string {
    return 'Hello World!'
  }

  async handleGoogleOAuth2Callback(clientId: string, idToken: string): Promise<string> {
    const payload = await this.ggOAuth2Provider.verify(clientId, idToken)
    const accessToken = await this.jwtSvc.sign(
      {
        username: payload?.email,
        tokenType: UserTokenType.GoogleAuth,
      },
      { expiresIn: '5m' },
    )
    console.log(accessToken)
    // TODO: caching session
    const redirectUrl = `${WEB_APP_HOST}?access_token=${accessToken}`

    return redirectUrl + `?access_token=${accessToken}`
  }

  // async signIn() {}

  // async signUp() {}
}
