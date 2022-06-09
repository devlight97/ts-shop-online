import { UserEntity } from 'services/identity/src/entities/user.entity'
import { Repository } from 'typeorm'

import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
  @Inject() jwtSvc: JwtService
  @InjectRepository(UserEntity) userRepo: Repository<UserEntity>

  async updateUser(user: Partial<UserEntity>) {
    await this.userRepo.update({ email: user.email }, user)
  }
}