import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type ChatRoomDocument = ChatRoom & Document;

@Schema()
export class ChatRoom {
  @Prop()
  user_id: string;

  @Prop()
  assistant_id: string;

  @Prop({ default: uuid() })
  id_chat_room: string;

  @Prop({ type: Date, default: Date.now() })
  created_at: Date;

  @Prop({ type: Date, default: Date.now() })
  updated_at: Date;
}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);
