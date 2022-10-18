import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { FindByUsername } from '../interfaces/DTOs/FindByUsername';

export class GetUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ username }: FindByUsername): Promise<User> {
    const user = await this.userRepository.findByUsername({ username });
    if (!user) {
      throw new AppError('User not exists! or not created!');
    }
    return user;
  }
}
