import { models } from '../models';
import type { ServerResponse } from '../types';

export const getAllUser = async (): Promise<ServerResponse> => {
  const response: ServerResponse = { status: true, statusCode: 200 };
  try {
    const users = await models.findAllUser();
    response.data = users;
    response.message = 'All Users';
    return response;
  } catch (error) {
    if (error instanceof Error) throw error;
    throw error;
  }
};
