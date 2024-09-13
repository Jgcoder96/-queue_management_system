import { Router } from 'express';
import type { Express } from 'express';
import type { ServerRoutes } from '../routes.server';

interface Options {
  app: Express;
  serverRoutes: ServerRoutes;
}

const setRoutes = ({ app, serverRoutes }: Options): Router => {
  const router = Router();
  router.use('/tickets', serverRoutes.tickets);
  app.use('/api', router);
  return router;
};

export { setRoutes, ServerRoutes };
