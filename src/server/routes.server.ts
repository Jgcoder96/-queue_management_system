import type { Router } from 'express';
import { ticketsRoutes } from '../modules/tickets/routes/tickets.route';

interface ServerRoutes {
  tickets: Router;
}

const serverRoutes: ServerRoutes = {
  tickets: ticketsRoutes(),
};

export { ServerRoutes, serverRoutes };
