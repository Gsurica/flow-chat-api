import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { GetUserUseCase } from '../usecases/Get-user-usecase';

export class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new GetUserUseCase(new UserRepository());
    const { username } = request.params;
    const user = await useCase.execute({ username });
    return response.json(user);
  }
}
