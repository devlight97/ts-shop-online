import { Module } from '@nestjs/common'
import { CoreModule } from '@packages/core'

import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [AuthModule, CoreModule],
  controllers: [],
  providers: [],
})
export class IdentityModule {}
