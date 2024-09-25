import { services } from '../services';
import type { Request, Response } from 'express';

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const data: { userId: string } = req.body;
    const { status, statusCode, message } = await services.deleteUser(
      data.userId,
    );
    return res.status(statusCode).json({ status, message });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
