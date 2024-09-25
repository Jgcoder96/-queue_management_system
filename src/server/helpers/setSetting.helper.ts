import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { setRoutes } from './setRoutes.helper';
import { swaggerSpecification } from '../../swagger/swagger';
import type { Express, Request, Response } from 'express';
import type { ServerRoutes } from '../routes.server';

interface Options {
  app: Express;
  serverRoutes: ServerRoutes;
}

export const setSetting = ({ app, serverRoutes }: Options): Express => {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
  setRoutes({ app, serverRoutes });

  app.get(/^\/(?!api).*/, (req: Request, res: Response) => {
    res.json({ procced: false, message: 'routes not found' });
  });

  return app;
};
