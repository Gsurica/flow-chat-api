import { Router } from 'express';
import { messageRoutes } from 'src/modules/messages/routes/messageRoutes';
import { userRoutes } from 'src/modules/user/routes/userRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/messages', messageRoutes);

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá, Dev!' });
});

export { routes };
