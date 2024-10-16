import { DataPostTicket, NewTicket } from '../types';
import { models } from '../models';
import { ServerResponse } from '../types';
import { errors } from '../errors';

export const createTicket = async (
  data: DataPostTicket,
): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const newTicket: NewTicket = {
      user_id: data.userId,
      type: data.type,
      subject: data.subject,
    };
    await models.insertTicket(newTicket);
    response.message = 'Created Ticket Successful';
    return response;
  } catch (error) {
    if (error instanceof errors.UserIdInvalid) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    }
    throw error;
  }
};
