import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { IdentityService } from './identity.service'

@Controller('identity')
export class IdentityController {
  constructor(private readonly service: IdentityService) {}

  @Get('test')
  test() {
    return 'test api !!'
  }
}
