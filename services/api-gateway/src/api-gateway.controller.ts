import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { ApiGatewayService } from './api-gateway.service'

@Controller()
export class ApiGatewayController {
  constructor(private readonly svc: ApiGatewayService) {}

  @Get()
  getHello(@Res() res: Response): string{
    // return this.svc.getHello()
    return 'test'
  }
}
