import { services } from '../services';
import type { Request, Response } from 'express';
import type { DataPostTicket } from '../types';

export const postTicket = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const dataPostTicket: DataPostTicket = req.body;
    const { status, statusCode, message } =
      await services.createTicket(dataPostTicket);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
