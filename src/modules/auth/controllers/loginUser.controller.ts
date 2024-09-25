import { services } from '../services';
import type { Request, Response } from 'express';
import type { DataLoginUser, ServerResponse } from '../types';

export const loginUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const dataLogin: DataLoginUser = req.body;
    const { status, statusCode, message }: ServerResponse =
      await services.verifyLogin(dataLogin);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
