import { models } from '../models';
import { encryptPassword } from '../utils';
import { errors } from '../errors';
import type {
  DataPutUser,
  ServerResponse,
  FieldsToUpdateFromUser,
} from '../types';

export const updateUser = async (
  data: DataPutUser,
): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const { userId, password, name, lastName, rol, dni, email } = data;
    let hashedPassword;
    if (password) {
      hashedPassword = await encryptPassword(password);
    }
    const fields: FieldsToUpdateFromUser = {
      dni,
      email,
      hashed_password: hashedPassword,
      last_name: lastName,
      name,
      rol,
      updated_at: new Date(),
    };
    await models.updateUser(userId, fields);
    response.message = 'update user successful';
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
