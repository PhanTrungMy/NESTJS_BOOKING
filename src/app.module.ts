import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SessionTemplateModule } from './domain/session-template/session-template.module';
import { AuthModule } from './domain/auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './domain/guard/auth.guard';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HealthModule } from './health/heath.module';
import { LoggingInterceptor } from './interceptor/logging.interceptor';


@Module({
  imports: [

    ConfigModule.forRoot({
      validate,
    }),
    HealthModule,
    DatabaseModule,
     UserModule, 
     SessionTemplateModule,
      AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class AppModule implements NestModule{
 configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');

      // note: exclude health endpoint from authentication to for AppGuard
      // consumer
      // .apply(AuthenticationMiddleware)
      // .exclude({path: 'health', method: RequestMethod.GET})
      // .forRoutes('*');
 }
}
