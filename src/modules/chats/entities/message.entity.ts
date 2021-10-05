import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop()
  to: string;

  @Prop()
  text: string;

  @Prop({ ref: 'ChatRoom' })
  room_id: string;

  @Prop({ type: Date, default: Date.now() })
  created_at: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
