import { Message } from '@prisma/client';
import { database } from '@shared/database/database';
import { CreateMessageDTO } from '../interfaces/DTOs/CreateMessageDTO';
import { IMessageRepository } from '../interfaces/IMessageRepository';

export class MessageRepository implements IMessageRepository {
  async create({ message, username }: CreateMessageDTO): Promise<Message> {
    const userMessage = await database.message.create({
      data: {
        message,
        User: {
          connect: {
            username: username,
          },
        },
      },
      select: {
        User: {
          select: {
            id: true,
            username: true,
            avatar: true,
            email: true,
            message: true,
            password: true,
            created_at: true,
            updated_at: true,
          },
        },
        id: true,
        message: true,
        userId: true,
        created_at: true,
      },
    });
    return userMessage;
  }
}
