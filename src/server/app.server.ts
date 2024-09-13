import express from 'express';
import type { Express } from 'express';
import { setSetting } from './helpers/setSetting.helper';
import { serverRoutes } from './routes.server';

export const server = (): Express => {
  const app = express();

  setSetting({ app, serverRoutes });

  return app;
};
