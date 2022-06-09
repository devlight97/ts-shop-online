import { UserEntity } from 'services/identity/src/entities/user.entity'
import { Repository } from 'typeorm'

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserProvider {
  @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const id = await (await this.userRepo.insert({ ...user })).identifiers[0].id
    return this.userRepo.findOneBy({ id })
  }

  public async updateUser(user: Partial<UserEntity>) {
    await this.userRepo.update({ email: user.email }, user)
  }

  public async verifySignInThenReturn(email: string, hashPassword: string) {
    return this.userRepo.findOne({ where: { email, password: hashPassword } })
  }
}
