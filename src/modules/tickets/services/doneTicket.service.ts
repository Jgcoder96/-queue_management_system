import { models } from '../models';
import { ServerResponse } from '../types';
import { errors } from '../errors';

export const doneTicket = async (ticketId: string): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    await models.updateDoneTicket(ticketId);
    response.message = 'Update Ticket Successful';
    return response;
  } catch (error) {
    if (error instanceof errors.RecordNotFound) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    }
    throw error;
  }
};
