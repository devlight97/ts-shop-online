import { Controller, Get, Post, Body } from '@nestjs/common'
import { GoogleSignInDto } from './google-mechanism.dto'

import { GoogleMechanismService } from './google-mechanism.service'

@Controller('identity/auth/google')
export class GoogleMechanismController {
  constructor(private readonly service: GoogleMechanismService) { }

  @Get('hello')
  getHello(): string {
    return this.service.getHello()
  }

  @Post('sign-in')
  async signInWithGoogle(@Body() signInDto: GoogleSignInDto): Promise<string> {
    return this.service.signInWithGoogle(signInDto)
  }
}
