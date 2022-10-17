import { User } from '@prisma/client';

export type LoginResponse = {
  user: User;
  token: string;
};
