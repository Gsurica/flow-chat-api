import { Message } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from 'src/modules/user/interfaces/IUserRepository';
import { CreateMessageDTO } from '../interfaces/DTOs/CreateMessageDTO';
import { IMessageRepository } from '../interfaces/IMessageRepository';

export class CreateMessageUseCase {
  constructor(
    private readonly messageRepository: IMessageRepository,
    private readonly userRepository: IUserRepository,
  ) {}
  async execute({ username, message }: CreateMessageDTO): Promise<Message> {
    const user = await this.userRepository.findByUsername({ username });

    if (!user) {
      throw new AppError('User not found');
    }

    const messageCreated = await this.messageRepository.create({
      username,
      message,
    });

    return messageCreated;
  }
}
