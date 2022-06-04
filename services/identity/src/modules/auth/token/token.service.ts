import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { ExceptionCode } from '@packages/common'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TokenService {
  @Inject() jwtSvc: JwtService
  @InjectRepository(UserEntity) userRepo: Repository<UserEntity>

  async verify(token: string): Promise<UserEntity> {
    const user = await this.jwtSvc.verifyAsync(token).catch(() => {
      throw new UnauthorizedException(ExceptionCode.InvalidAccessToken)
    })

    const userDto = await this.userRepo.findOne({ where: { email: user.email } })

    return userDto
  }
}