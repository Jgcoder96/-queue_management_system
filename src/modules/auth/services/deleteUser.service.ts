import { models } from '../models';
import { errors } from '../errors';
import type { ServerResponse } from '../types';

export const deleteUser = async (userId: string): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    await models.deleteUser(userId);
    response.message = 'delete user successful';
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
