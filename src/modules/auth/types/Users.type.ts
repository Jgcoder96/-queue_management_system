export interface Users {
  user_id: string;
  name: string;
  last_name: string;
  dni: number;
  email: string;
  hashed_password: string;
  rol: 'USER' | 'MODERATOR' | 'ADMIN';
  is_connected: boolean;
  created_at: Date;
  updated_at: Date | null;
}
