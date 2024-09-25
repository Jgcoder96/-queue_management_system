import { models } from '../models';
import { encryptPassword } from '../utils';
import { errors } from '../errors';
import type { DataRegisterUser, NewUser, ServerResponse } from '../types';

export const createUser = async (
  data: DataRegisterUser,
): Promise<ServerResponse> => {
  const response: ServerResponse = { status: false, statusCode: 200 };
  try {
    const hashedPassword = await encryptPassword(data.password);

    const newUser: NewUser = {
      name: data.name,
      last_name: data.lastName,
      dni: data.dni,
      email: data.email,
      hashed_password: hashedPassword,
      rol: data.rol,
    };

    await models.insertUser(newUser);

    response.status = true;
    response.message = 'Register Successful';

    return response;
  } catch (error) {
    if (error instanceof errors.RecordAlreadyExists) {
      response.statusCode = error.statusCode;
      response.message = error.message;
      return response;
    }
    throw error;
  }
};
