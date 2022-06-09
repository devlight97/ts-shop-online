import { Injectable, BadRequestException } from '@nestjs/common'
import { ExceptionCode } from '@packages/common'
import { isEmpty } from 'lodash'
import { UserEntity } from 'services/identity/src/entities/user.entity'

import { SignUpDto } from './local-mechanism.dto'

@Injectable()
export class LocalMechanismValidation {
  async ifSignUpIsValid(
    { firstName, lastName, password, email, address, phoneNumber }: SignUpDto,
  ): Promise<UserEntity> {
    if (isEmpty(firstName)) {
      throw new BadRequestException(ExceptionCode.BadRequest)
    }
    else if (isEmpty(lastName)) {
      throw new BadRequestException(ExceptionCode.BadRequest)
    }
    else if (isEmpty(password)) {
      throw new BadRequestException(ExceptionCode.InvalidPassword)
    }
    else if (isEmpty(email)) {
      throw new BadRequestException(ExceptionCode.InvalidEmail)
    }
    else if (isEmpty(address)) {
      throw new BadRequestException(ExceptionCode.InvalidAddress)
    }

    const user = new UserEntity()
    user.email = email
    user.address = address
    user.lastName = lastName
    user.firstName = firstName
    user.password = password
    user.phoneNumber = phoneNumber

    return user
  }
}