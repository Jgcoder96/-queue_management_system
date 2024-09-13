import { Router } from 'express';
import { ticketsControllers } from '../controllers/tickets.controller';

export const ticketsRoutes = (): Router => {
  const router = Router();
  router.get('/', ticketsControllers.getTickets);
  return router;
};
