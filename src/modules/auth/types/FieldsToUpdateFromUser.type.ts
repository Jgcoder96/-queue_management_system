export interface FieldsToUpdateFromUser {
  name?: string;
  last_name?: string;
  dni?: number;
  email?: string;
  hashed_password?: string;
  updated_at?: Date;
  rol?: 'USER' | 'MODERATOR' | 'ADMIN';
}
