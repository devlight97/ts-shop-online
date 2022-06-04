import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { JWT_SECRET_KEY } from '@packages/env'

@Module({
  imports: [JwtModule.register({ secret: JWT_SECRET_KEY })],
  controllers: [],
  providers: [],
})

export class CoreModule {}
// export class CoreModule implements NestModule {
  // configure(consumer: MiddlewareConsumer) {
  //   return consumer
  //     .apply(AuthMiddleware)
  //     .exclude('/identity/sign-in', '/identity/sign-up', '/identity/auth/google/callback', {
  //       path: '/sign-in',
  //       method: RequestMethod.ALL,
  //     })
  //     .forRoutes('*')
    // .apply(
    //   rateLimit({
    //     windowMs: 10 * 60 * 1000, // 10 minutes
    //     max: 1000,
    //     keyGenerator: (request) => `${request.ip}_${request.userId}`,
    //     message: 'Too many requests. Please try later',
    //   }),
    // )
    // .forRoutes('attachments/*', 'cv/*', 'misc/*', 'news-resources/*', 'tenant-resources/*')
//   }
// }
