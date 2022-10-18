import { Request, Response } from 'express';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { MessageRepository } from '../repositories/MessageRepository';
import { CreateMessageUseCase } from '../usecases/Create-message-usecase';

export class CreateMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = new CreateMessageUseCase(
      new MessageRepository(),
      new UserRepository(),
    );

    const { username } = request.params;
    const { message } = request.body;

    const messageCreated = await useCase.execute({
      message,
      username,
    });

    return response.status(201).json(messageCreated);
  }
}
