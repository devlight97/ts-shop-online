import { Controller, Get, Post, Body } from '@nestjs/common'
import { UserEntity } from 'services/identity/src/entities/user.entity'
import { SignInDto, SignUpDto } from './local-mechanism.dto'
import { LocalMechanismService } from './local-mechanism.service'


@Controller('identity/auth/local')
export class LocalMechanismController {
  constructor(private readonly service: LocalMechanismService) { }

  @Get('hello')
  getHello(): string {
    return this.service.getHello()
  }

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<string> {
    return this.service.signUp(signUpDto)
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto): Promise<string> {
    return this.service.signIn(signInDto)
  }
}
