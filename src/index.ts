import { createServer } from 'http';
import { envs } from './config/envs';
import { server as serverExpress } from './server/app.server';
import { initWss } from './services/webSocketServer.service';

const main = () => {
  const server = serverExpress();
  const httpServer = createServer(server);
  initWss({ server: httpServer });
  httpServer.listen(envs.PORT_APP, () => {
    console.log(`Server in http://localhost:${envs.PORT_APP}`);
  });
};

(async () => {
  main();
})();
