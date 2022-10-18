import { Message } from '@prisma/client';
import { database } from '@shared/database/database';
import { CreateMessageDTO } from '../interfaces/DTOs/CreateMessageDTO';
import { IMessageRepository } from '../interfaces/IMessageRepository';

export class MessageRepository implements IMessageRepository {
  async create({ message, userId }: CreateMessageDTO): Promise<Message> {
    const userMessage = await database.message.create({
      data: {
        message,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return userMessage;
  }
}
