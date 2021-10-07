import { IsNotEmpty, IsString } from 'class-validator';
import { Chat } from '../entities/chat.entity';

export class CreateChatDto extends Chat {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  assistant_id: string;
}
