import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
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

export const ChatSchema = SchemaFactory.createForClass(Chat);
