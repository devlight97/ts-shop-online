import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'

import { GoogleMechanismService } from './google-mechanism.service'

@Controller('auth/google')
export class GoogleMechanismController {
  constructor(private readonly ggMechanismSvc: GoogleMechanismService) {}

  @Get('hello')
  getHello(): string {
    return this.ggMechanismSvc.getHello()
  }

  @Post('callback')
  async login(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { credential: idToken, clientId } = req.body
    const url = await this.ggMechanismSvc.handleGoogleOAuth2Callback(clientId, idToken)

    res.redirect(url)
  }
}
