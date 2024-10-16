import { models } from '../models';
import { errors } from '../errors';
import type { ServerResponse } from '../types';

export const getWorkingOnTickets = async (): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const tickets = await models.findWorkingOnTickets();
    response.data = tickets;
    response.message = 'tickets';
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
