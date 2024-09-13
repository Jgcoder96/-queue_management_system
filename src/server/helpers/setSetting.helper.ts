import express from 'express';
import { setRoutes } from './setRoutes.helper';
import type { Express, Request, Response } from 'express';
import type { ServerRoutes } from '../routes.server';

interface Options {
  app: Express;
  serverRoutes: ServerRoutes;
}

export const setSetting = ({ app, serverRoutes }: Options): Express => {
  setRoutes({ app, serverRoutes });

  app.use(express.json());

  app.get(/^\/(?!api).*/, (req: Request, res: Response) => {
    res.json({ procced: false, message: 'routes not found' });
  });

  return app;
};
