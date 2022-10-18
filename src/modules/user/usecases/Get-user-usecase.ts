import { IUserRepository } from '../interfaces/IUserRepository';
import { FindById } from '../interfaces/DTOs/FindById';
import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ id }: FindById): Promise<User> {
    const user = await this.userRepository.findById({ id });
    if (!user) {
      throw new AppError('User not exists! or not created!');
    }
    return user;
  }
}
