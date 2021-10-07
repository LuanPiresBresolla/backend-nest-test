import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';

import { Message, MessageSchema } from './entities/message.entity';
import { Chat, ChatSchema } from './entities/chat.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Message.name, schema: MessageSchema },
      { name: Chat.name, schema: ChatSchema },
    ]),
  ],
  controllers: [ChatsController],
  providers: [ChatsService],
})
export class ChatsModule {}
