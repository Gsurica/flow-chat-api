import { Router } from 'express';
import { CreateUserController } from '../controller/Create-user-controller';
import { GetUserController } from '../controller/Get-user-controller';
import { LoginUserController } from '../controller/Login-user-controller';

const userRoutes = Router();

const createController = new CreateUserController();
const loginController = new LoginUserController();
const getUserController = new GetUserController();

userRoutes.post('/create', createController.handle);
userRoutes.post('/login', loginController.handle);
userRoutes.get('/:username', getUserController.handle);

export { userRoutes };
