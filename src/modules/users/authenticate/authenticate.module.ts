import { Module } from '@nestjs/common';
import { UsersModule } from '../users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../../config/auth';
import { AuthenticateService } from './authenticate.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthenticateService],
  exports: [AuthenticateService],
})
export class AuthenticateModule {}
