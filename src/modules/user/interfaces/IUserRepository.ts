import { User } from '@prisma/client';
import { CreateUserDTO } from './DTOs/CreateUserDTO';
import { FindByEmail } from './DTOs/FindByEmail';
import { FindById } from './DTOs/FindById';
import { FindByUsername } from './DTOs/FindByUsername';

export interface IUserRepository {
  create({ username, password, email, avatar }: CreateUserDTO): Promise<User>;
  findByUsername({ username }: FindByUsername): Promise<User>;
  findById({ id }: FindById): Promise<User>;
  findByEmail({ email }: FindByEmail): Promise<User>;
}
