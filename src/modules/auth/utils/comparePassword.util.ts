import bcrypt from 'bcryptjs';

export const comparePassword = async (
  hashedPassword: string,
  password: string,
): Promise<boolean> => {
  const pass = await bcrypt.compare(hashedPassword, password);
  return pass;
};
