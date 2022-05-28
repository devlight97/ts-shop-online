import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { GoogleMechanismController } from './google-mechanism/google-mechanism.controller'
import { GoogleMechanismService } from './google-mechanism/google-mechanism.service'
import { GoogleOauth2Provider } from './google-mechanism/google-oauth2.provider'

@Module({
  imports: [JwtModule.register({ secret: 'quang_dev_secret' })],
  controllers: [GoogleMechanismController],
  providers: [GoogleOauth2Provider, GoogleMechanismService],
  exports: [],
})
export class AuthModule {}
