export interface NewUser {
  name: string;
  last_name: string;
  dni: number;
  email: string;
  hashed_password: string;
  rol?: 'USER' | 'MODERATOR' | 'ADMIN';
}
