import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '@shared/errors/AppError';
import http from 'http';
// import socket from 'socket.io';

const app = express();
const server = http.createServer(app);

// const io = socket(server, {
//   path: '/socket.io',
// });

// const clients = [];

// io.on('connection', client => {
//   console.log(`Client connected ${client.id}`);
//   clients.push(client);

//   client.on('disconnect', () => {
//     clients.splice(clients.indexOf(client), 1);
//     console.log('Client disconnected!');
//   });
// });

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log(`Server started on port 3333!`);
});
