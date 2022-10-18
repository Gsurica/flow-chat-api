import { Message } from '@prisma/client';
import { CreateMessageDTO } from './DTOs/CreateMessageDTO';

export interface IMessageRepository {
  create({ message, userId }: CreateMessageDTO): Promise<Message>;
}
