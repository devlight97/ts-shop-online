import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../../entities/user.entity'

import { GoogleMechanismController } from './google-mechanism/google-mechanism.controller'
import { GoogleMechanismService } from './google-mechanism/google-mechanism.service'
import { GoogleOauth2Provider } from './google-mechanism/google-oauth2.provider'
import { TokenController } from './token/token.controller'
import { TokenService } from './token/token.service'
import { jwtConfig } from '../../configs/jwt.config'
import { LocalMechanismController } from './local-mechanism/local-mechanism.controller'
import { LocalMechanismService } from './local-mechanism/local-mechanism.service'
import { UserProvider } from './infras'
import { LocalMechanismValidation } from './local-mechanism/local-mechanism.validation'

@Module({
  imports: [
    JwtModule.register({ secret: jwtConfig.JWT_SECRET_KEY }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [GoogleMechanismController, TokenController, LocalMechanismController],
  providers: [
    GoogleOauth2Provider,
    GoogleMechanismService,
    TokenService,
    LocalMechanismService,
    LocalMechanismValidation,
    UserProvider,
  ],
  exports: [],
})
export class AuthModule { }
