import { Module } from '@nestjs/common';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
