import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function userAutheticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Failed to verify token!', 500);
  }

  const token = authorization.split(' ')[1];

  try {
    verify(token, 'mysecret');
    return next();
  } catch (err) {
    throw new AppError("Validation's Token is invalid!");
  }
}
