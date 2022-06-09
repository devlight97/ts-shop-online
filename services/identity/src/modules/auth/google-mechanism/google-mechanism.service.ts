import { get, isNil } from 'lodash'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { Repository } from 'typeorm'

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { ExceptionCode } from '@packages/common'

import { UserProvider } from '../infras/user.provider'
import { SignUpDto } from './google-mechanism.dto'

const THREE_DAY = 3600 * 24 * 3

@Injectable()
export class GoogleMechanismService {
  @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  @Inject() private readonly userProvider: UserProvider
  @Inject() private readonly jwtSvc: JwtService

  getHello(): string {
    return 'Hello World!'
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

    if (isNil(user)) {
      const userCreated = await this.userProvider.createUser(newUser)
      return this.jwtSvc.signAsync({ ...userCreated }, { expiresIn: THREE_DAY })
    }

    return this.jwtSvc.signAsync({ ...user }, { expiresIn: THREE_DAY })
  }
}
