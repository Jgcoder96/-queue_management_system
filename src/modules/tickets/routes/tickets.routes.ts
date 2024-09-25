import { Router } from 'express';
import { ticketsControllers } from '../controllers/tickets.controllers';

export const ticketsRoutes = (): Router => {
  const router = Router();
  router.get('/', ticketsControllers.getTickets);
  return router;
};
