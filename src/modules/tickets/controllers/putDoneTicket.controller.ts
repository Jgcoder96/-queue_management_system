import { services } from '../services';
import type { Request, Response } from 'express';

export const putDoneTicket = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const ticketId: string = req.params.ticketId;
    const { status, statusCode, message } = await services.doneTicket(ticketId);
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
