import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'

@Controller('identity/auth')
export class AuthController {
  constructor(private readonly service: AuthService) { }

  @Get('token/verify')
  async verify(@Req() req: Request) {
    return this.service.get(req.url)
  }

  @Post('google/sign-in')
  async googleSignIn(@Req() req: Request, @Body() body) {
    return this.service.post(req.url, body)
  }
}
