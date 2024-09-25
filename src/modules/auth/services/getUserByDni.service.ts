import { models } from '../models';
import { ServerResponse } from '../types';
import { errors } from '../errors';

export const getUserByDni = async (dni: number): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const user = await models.findUserByDni(dni);
    response.data = user;
    response.message = 'user';
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
