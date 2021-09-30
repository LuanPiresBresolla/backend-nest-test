import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthenticateService } from './authenticate/authenticate.service';
import { AuthenticateModule } from './authenticate/authenticate.module';

@Module({
  imports: [AuthenticateModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthenticateService],
})
export class UsersModule {}
