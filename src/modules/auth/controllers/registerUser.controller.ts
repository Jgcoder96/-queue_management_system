import { services } from '../services';
import type { Request, Response } from 'express';
import type { ServerResponse, DataRegisterUser } from '../types';

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const dataUser: DataRegisterUser = req.body;
    const { status, statusCode, message }: ServerResponse =
      await services.createUser(dataUser);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
