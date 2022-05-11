import { Injectable } from "@nestjs/common"

@Injectable()
export class TokenService {
  // private async signNewAccessToken(username: string, userId: string, expiresIn: string | number) {
  //   const userSessionId = new ObjectId().toHexString()
  //   const accessToken = await this.jwtService.signAsync({ username, userId, userSessionId }, { expiresIn })
  //   const cacheKey = masterUserTokenKey(userId, userSessionId)
  //   await this.tokenCacheSvc.setUserToken(cacheKey, accessToken, EXPIRED_INFO[expiresIn])
  //   return { accessToken, cacheKey }
  // }
}