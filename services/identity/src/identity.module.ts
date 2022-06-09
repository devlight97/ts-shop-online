import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CoreModule } from '@packages/core'
import { DB_CONFIG } from '@packages/env'

import { UserEntity } from './entities/user.entity'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: DB_CONFIG.identity.username,
      password: DB_CONFIG.identity.password,
      database: 'identity_db',
      entities: [UserEntity],
      synchronize: true,
    }),
    AuthModule, CoreModule, UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class IdentityModule { }
