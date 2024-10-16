import { DataPutAssignTicket } from '../types';
import { models } from '../models';
import { ServerResponse } from '../types';
import { errors } from '../errors';

export const assignTicket = async (
  data: DataPutAssignTicket,
): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    await models.updateAssignTicket(data);
    response.message = 'Update Ticket Successful';
    return response;
  } catch (error) {
    if (error instanceof errors.UserIdInvalid) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    } else if (error instanceof errors.RecordNotFound) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    }

    throw error;
  }
};
