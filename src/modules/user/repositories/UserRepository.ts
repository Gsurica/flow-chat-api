import { User } from '@prisma/client';
import { IUserRepository } from '../interfaces/IUserRepository';
import { database } from '@shared/database/database';
import { CreateUserDTO } from '../interfaces/DTOs/CreateUserDTO';
import { FindByEmail } from '../interfaces/DTOs/FindByEmail';
import { FindById } from '../interfaces/DTOs/FindById';
import { FindByUsername } from '../interfaces/DTOs/FindByUsername';

export class UserRepository implements IUserRepository {
  async create({
    username,
    password,
    email,
    avatar,
  }: CreateUserDTO): Promise<User> {
    const user = await database.user.create({
      data: {
        username,
        password,
        email,
        avatar,
      },
    });

    return user;
  }

  async findByUsername({ username }: FindByUsername): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  }

  async findById({ id }: FindById): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail({ email }: FindByEmail): Promise<User> {
    const user = await database.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
