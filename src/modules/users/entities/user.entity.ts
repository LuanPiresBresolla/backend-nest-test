import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;
  login: string;
  name: string;
  email: string;
  password: string;
  assistant: boolean;
  logged: boolean;
  created_at?: string | Date;
  updated_at?: string | Date;
}
