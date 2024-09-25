import type { Router } from 'express';
import { ticketsRoutes } from '../modules/tickets/routes/tickets.routes';
import { authRoutes } from '../modules/auth/routes/auth.routes';

interface ServerRoutes {
  tickets: Router;
  auth: Router;
}

const serverRoutes: ServerRoutes = {
  tickets: ticketsRoutes(),
  auth: authRoutes(),
};

export { ServerRoutes, serverRoutes };
