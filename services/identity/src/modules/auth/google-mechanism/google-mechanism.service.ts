import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserTokenType, ExceptionCode } from '@packages/common'
import { get, isNil } from 'lodash'
import { UserEntity } from '../../../entities/user.entity'
import { Repository } from 'typeorm'
import { SignUpDto } from './google-mechanism.dto'

import { GoogleOauth2Provider } from './google-oauth2.provider'
import { InjectRepository } from '@nestjs/typeorm'

const THREE_DAY = 3600 * 24 * 3

@Injectable()
export class GoogleMechanismService {
  @Inject() ggOAuth2Provider: GoogleOauth2Provider
  @Inject() jwtSvc: JwtService
  @InjectRepository(UserEntity) userRepo: Repository<UserEntity>

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
    const redirectUrl = `/sign-in?access_token=${accessToken}`

    return redirectUrl
  }

  async createUser(user: Partial<UserEntity>) {
    await this.userRepo.insert({ ...user })
  }

  async updateUser(user: Partial<UserEntity>) {
    await this.userRepo.update({ email: user.email }, user)
  }

  async signInWithGoogle(signUpData: SignUpDto): Promise<string> {
    const { credential } = signUpData
    const profile = this.jwtSvc.decode(credential) as any
    if (isNil(profile)) {
      throw new UnauthorizedException(ExceptionCode.InvalidIdToken)
    }

    const user = await this.userRepo
      .createQueryBuilder('user')
      .where('user.email = :email', { email: profile?.email })
      .getOne()

    const newUser = {
      firstName: get(profile, 'given_name', 'Unknowed'),
      lastName: get(profile, 'family_name', 'Unknowed'),
      email: profile?.email,
      imageUrl: get(profile, 'picture', 'Unknowed'),
    }

    isNil(user) && await this.createUser(newUser)
    !isNil(user) && await this.updateUser(newUser)

    const accessToken = await this.jwtSvc.signAsync(newUser, { expiresIn: THREE_DAY })
    return accessToken
  }
}
