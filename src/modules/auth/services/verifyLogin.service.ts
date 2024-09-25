import { models } from '../models';
import { comparePassword } from '../utils';
import { errors } from '../errors';
import type { DataLoginUser, ServerResponse } from '../types';

export const verifyLogin = async (
  data: DataLoginUser,
): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const result = await models.findUserByEmail(data.email);
    const pass = await comparePassword(data.password, result.hashed_password);
    if (!pass) {
      throw new errors.incorrectPassword();
    }
    response.message = 'login Successful';
    return response;
  } catch (error) {
    if (error instanceof errors.RecordNotFound) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    } else if (error instanceof errors.incorrectPassword) {
      response.status = error.status;
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    }
    throw error;
  }
};
