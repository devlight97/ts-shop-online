import { Module } from '@nestjs/common'
import { CoreModule } from '@packages/core'
import { IdentityController } from './identity.controller'
import { IdentityService } from './identity.service'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [AuthModule, CoreModule],
  controllers: [IdentityController],
  providers: [IdentityService],
})

export class IdentityModule {}
