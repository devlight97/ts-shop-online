import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../../entities/user.entity'

import { GoogleMechanismController } from './google-mechanism/google-mechanism.controller'
import { GoogleMechanismService } from './google-mechanism/google-mechanism.service'
import { GoogleOauth2Provider } from './google-mechanism/google-oauth2.provider'
import { TokenController } from './token/token.controller'
import { TokenService } from './token/token.service'

@Module({
  imports: [
    JwtModule.register({ secret: 'quang_dev_secret' }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [GoogleMechanismController, TokenController],
  providers: [GoogleOauth2Provider, GoogleMechanismService, TokenService],
  exports: [],
})
export class AuthModule { }
