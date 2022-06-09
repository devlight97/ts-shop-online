import { Inject, Injectable, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { ExceptionCode } from '@packages/common'
import { isNil } from 'lodash'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { md5 } from 'services/identity/src/utils'
import { Repository } from 'typeorm'
import { UserProvider } from '../infras'
import { SignInDto, SignUpDto } from './local-mechanism.dto'
import { LocalMechanismValidation } from './local-mechanism.validation'

const THREE_DAY = 3600 * 24 * 3

@Injectable()
export class LocalMechanismService {
  @Inject() jwtSvc: JwtService
  @Inject() validator: LocalMechanismValidation
  @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  @Inject() userProvider: UserProvider

  getHello(): string {
    return 'Hello World!'
  }

  async signIn({ email, password }: SignInDto): Promise<string> {
    const hashPwd = md5(password)
    const userExisting = await this.userProvider.verifySignInThenReturn(email, hashPwd)

    if (isNil(userExisting)) {
      throw new BadRequestException(ExceptionCode.BadRequest)
    }

    return this.jwtSvc.signAsync({ ...userExisting }, { expiresIn: THREE_DAY })
  }

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const user = await this.validator.ifSignUpIsValid(signUpDto)
    user.password = md5(user.password)
    const userCreated = await this.userRepo.save({ ...user })
    return this.jwtSvc.signAsync({ ...userCreated }, { expiresIn: THREE_DAY })
  }
}
