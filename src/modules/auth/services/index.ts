import { createUser } from './createUser.service';
import { deleteUser } from './deleteUser.service';
import { getAllUser } from './getAllUser.service';
import { getUserByDni } from './getUserByDni.service';
import { updateUser } from './updateUser.service';
import { verifyLogin } from './verifyLogin.service';

export const services = {
  createUser,
  deleteUser,
  getAllUser,
  getUserByDni,
  updateUser,
  verifyLogin,
};
