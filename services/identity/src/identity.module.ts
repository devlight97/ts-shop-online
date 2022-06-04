import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CoreModule } from '@packages/core'
import { AuthModule } from './modules/auth/auth.module'
import { DB_CONFIG } from '@packages/env'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [
    AuthModule, CoreModule,
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
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class IdentityModule { }
