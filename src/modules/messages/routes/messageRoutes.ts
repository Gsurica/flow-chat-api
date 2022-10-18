import { Router } from 'express';
import { CreateMessageController } from '../controller/Create-message-controller';

const messageRoutes = Router();

const createMessageController = new CreateMessageController();

messageRoutes.post('/:username', createMessageController.handle);

export { messageRoutes };
