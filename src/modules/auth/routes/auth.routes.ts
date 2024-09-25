import { Router } from 'express';
import { schemaValidator } from '../../../middlewares';
import { controllers } from '../controllers';
import { schema } from '../schemas';

export const authRoutes = (): Router => {
  const router = Router();

  router.get('/users', controllers.getUsers);

  router.get('/users/:dni', controllers.getUserByDni);

  router.post(
    '/users/register',
    [schemaValidator(schema.registerUser)],
    controllers.registerUser,
  );

  router.post(
    '/users/login',
    [schemaValidator(schema.loginUser)],
    controllers.loginUser,
  );

  router.put(
    '/users',
    [schemaValidator(schema.updateUser)],
    controllers.putUser,
  );

  router.delete(
    '/users',
    [schemaValidator(schema.deleteUser)],
    controllers.deleteUser,
  );
  return router;
};
