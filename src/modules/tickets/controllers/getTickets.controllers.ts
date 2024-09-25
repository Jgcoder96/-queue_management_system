import { Request, Response } from 'express';

export const getTickets = async (req: Request, res: Response) => {
  try {
    return res.json({ procced: true, message: 'get tickets' });
  } catch (error) {
    console.log(error);
  }
};
