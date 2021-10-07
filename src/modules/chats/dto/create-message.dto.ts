import { IsNotEmpty, IsString } from 'class-validator';
import { Message } from '../entities/message.entity';

export class CreateMessageDto extends Message {
  @IsString()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  room_id: string;
}
