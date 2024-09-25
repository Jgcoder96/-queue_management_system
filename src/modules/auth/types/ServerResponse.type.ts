import { Users } from './Users.type';

export interface ServerResponse {
  status: boolean;
  message?: string;
  statusCode: number;
  data?: Users[] | Users;
}
