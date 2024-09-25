import { services } from '../services/index';
import type { Request, Response } from 'express';
import type { DataPutUser } from '../types';

export const putUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const data: DataPutUser = req.body;
    const { status, statusCode, message } = await services.updateUser(data);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
