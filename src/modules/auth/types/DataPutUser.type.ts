export interface DataPutUser {
  userId: string;
  name?: string;
  lastName?: string;
  dni?: number;
  email?: string;
  password?: string;
  rol?: 'USER' | 'MODERATOR' | 'ADMIN';
}
