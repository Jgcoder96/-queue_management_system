import { Router } from 'express';
import { schemaValidator } from '../../../middlewares';
import { schemas } from '../schemas';
import { controllers } from '../controllers';

export const ticketsRoutes = (): Router => {
  const router = Router();

  router.get('/', controllers.getTickets);

  router.get('/last', controllers.getLastTicket);
  router.get('/pending', controllers.getPendingTickets);
  router.get('/working-on', controllers.getWorkingOnTicket);
  router.post(
    '/',
    [schemaValidator(schemas.postTicket)],
    controllers.postTicket,
  );
  router.put('/done/:ticketId', controllers.putDoneTicket);
  router.put(
    '/assign',
    [schemaValidator(schemas.putAssignTicket)],
    controllers.putAssignTicket,
  );

  return router;
};
