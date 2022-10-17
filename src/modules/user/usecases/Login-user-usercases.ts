import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { LoginUserDTO } from '../interfaces/DTOs/LoginUserDTO';
import { IUserRepository } from '../interfaces/IUserRepository';
import { sign } from 'jsonwebtoken';
import { LoginResponse } from '../interfaces/DTOs/LoginResponse';

export class LoginUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ username, password }: LoginUserDTO): Promise<LoginResponse> {
    const user = await this.userRepository.findByUsername({
      username,
    });

    if (!user) {
      throw new AppError('User not found or not created!');
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new AppError('Username or password incorrect!');
    }

    const token = sign({ id: user.id }, 'mysecret', {
      expiresIn: '8h',
    });

    return {
      user,
      token,
    };
  }
}
