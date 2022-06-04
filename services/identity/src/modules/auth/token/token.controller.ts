import { Controller, Get, Post, Req, Res, Redirect, Body, Param, Query } from '@nestjs/common'
import { Request, Response } from 'express'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { TokenService } from './token.service'

@Controller('identity/auth/token')
export class TokenController {
  constructor(private readonly service: TokenService) { }

  @Get('verify')
  async getHello(@Query('access_token') token: string): Promise<UserEntity> {
    return this.service.verify(token)
  }
}
