import { Server } from 'http';
import { WebSocketServer, WebSocket } from 'ws';

interface Options {
  server: Server;
  path?: string;
}

const startWss = (wss: WebSocketServer): void => {
  wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');

    ws.on('close', () => console.log('Client disconnected'));
  });
};

const initWss = (options: Options): WebSocketServer => {
  const { server, path = '/ws' } = options;
  const wssInstance = new WebSocketServer({ server, path });
  startWss(wssInstance);
  return wssInstance;
};

export { startWss, initWss };
