import { Router } from 'express';
import { CreateUserController } from '../controller/Create-user-controller';
import { LoginUserController } from '../controller/Login-user-controller';

const userRoutes = Router();

const createController = new CreateUserController();
const loginController = new LoginUserController();

userRoutes.post('/create', createController.handle);
userRoutes.post('/login', loginController.handle);

export { userRoutes };
