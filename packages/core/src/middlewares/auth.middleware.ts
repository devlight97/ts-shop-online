import { Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Request, Response } from 'express'
import * as url from 'url'
import { isEmpty } from 'lodash'

import { AUTHORIZATION, BEARER_AUTH_SCHEME, ExceptionCode, IAccessTokenPayload } from '@packages/common'
import { HEALTH_CHECK_PATHS } from '@packages/core'

export class AuthMiddleware implements NestMiddleware<Request, Response> {
  private readonly logger = new Logger(AuthMiddleware.name)

  constructor(
    private readonly jwtSvc: JwtService, // private readonly redisService: RedisService,
  ) {}

  async use(req: Request, res: Response, next: () => void) {
    const { protocol, baseUrl, originalUrl, hostname } = req
    const [absUrl] = originalUrl.split('?')
    const reqUrl = url.format({ protocol, host: hostname, pathname: absUrl })

    if (HEALTH_CHECK_PATHS.includes(baseUrl)) {
      next()
      return
    }
    this.logger.debug(`Receiving request to ${reqUrl}`)

    const accessToken = req.header[AUTHORIZATION]
    const payload = await this.checkIfTokenIsValid(accessToken)
    await this.checkIfSessionIsValid(payload.userId, payload.sessionId)

    next()
  }

  private async checkIfTokenIsValid(accessToken: string): Promise<IAccessTokenPayload> {
    if (isEmpty(accessToken) || !accessToken.startsWith(BEARER_AUTH_SCHEME)) {
      throw new UnauthorizedException(ExceptionCode.InvalidAccessToken)
    }

    try {
      const jwtToken = accessToken.replace(BEARER_AUTH_SCHEME, '')
      return this.jwtSvc.verify(jwtToken)
    } catch (error) {
      throw new UnauthorizedException(ExceptionCode.InvalidAccessToken)
    }
  }

  private async checkIfSessionIsValid(userId: string, sessionId: string): Promise<void> {
    // TODO: get session data from cache server
    // TODO: verify sessionId
  }
}
