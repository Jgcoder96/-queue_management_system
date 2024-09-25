import type { Request, Response } from 'express';
import { services } from '../services';

export const getUserByDni = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const dataGetUser = req.params;
    const { status, statusCode, message, data } = await services.getUserByDni(
      Number(dataGetUser.dni),
    );
    return res.status(statusCode).json({ status, message, data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: 'Internal Server Error' });
  }
};
