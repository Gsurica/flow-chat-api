import { Router } from 'express';
import { CreateUserController } from '../controller/Create-user-controller';

const userRoutes = Router();

const createController = new CreateUserController();

userRoutes.post('/', createController.handle);

export { userRoutes };
