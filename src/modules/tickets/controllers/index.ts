import { getLastTicket } from './getLastTicket.controlller';
import { getPendingTickets } from './getPendingTickets.conttroller';
import { getTickets } from './getTickets.controller';
import { getWorkingOnTicket } from './getWorkingOnTicket.controller';
import { postTicket } from './postTicket.controller';
import { putAssignTicket } from './putAssignTicket.controller';
import { putDoneTicket } from './putDoneTicket.controller';

export const controllers = {
  getLastTicket,
  getPendingTickets,
  getTickets,
  getWorkingOnTicket,
  postTicket,
  putAssignTicket,
  putDoneTicket,
};
