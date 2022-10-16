import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { CreateUserDTO } from '../interfaces/DTOs/CreateUserDTO';
import { IUserRepository } from '../interfaces/IUserRepository';
import { hash } from 'bcryptjs';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute({
    username,
    email,
    password,
    avatar,
  }: CreateUserDTO): Promise<User> {
    const usernameAlreadyInUse = await this.userRepository.findByUsername({
      username,
    });

    const emailAlreadyInUse = await this.userRepository.findByEmail({
      email,
    });

    if (usernameAlreadyInUse) {
      throw new AppError('Username already in use!');
    }

    if (emailAlreadyInUse) {
      throw new AppError('Email already in use!');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.userRepository.create({
      username,
      email,
      password: hashedPassword,
      avatar,
    });

    return user;
  }
}
