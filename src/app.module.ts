import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

import { ChatGateway } from './chat.gateway';
import { ChatsModule } from './modules/chats/chats.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ChatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
