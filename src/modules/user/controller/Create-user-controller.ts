import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserUseCase } from '../usecases/Create-user-usecase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new CreateUserUseCase(new UserRepository());

    const { username, email, password, avatar } = request.body;

    const user = await useCase.execute({
      username,
      password,
      email,
      avatar,
    });

    return response.status(201).json(user);
  }
}
