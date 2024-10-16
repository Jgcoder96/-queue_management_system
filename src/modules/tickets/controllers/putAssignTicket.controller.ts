import { services } from '../services';
import type { Request, Response } from 'express';
import type { DataPutAssignTicket } from '../types';

export const putAssignTicket = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const data: DataPutAssignTicket = req.body;
    const { status, statusCode, message } = await services.assignTicket(data);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
