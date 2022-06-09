import { Controller, Get, Post, Put, Req, Res, Redirect, Body, Param, Query } from '@nestjs/common'
import { Request, Response } from 'express'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { UserService } from './user.service'

@Controller('identity/user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Put('my-profile')
  async updateProfile(@Body() user: Partial<UserEntity>): Promise<void> {
    return this.service.updateUser(user)
  }
}
