import { assignTicket } from './assignTicket.service';
import { createTicket } from './createTicket.service';
import { doneTicket } from './doneTicket.service';
import { getAllTicket } from './getAllTicket.service';
import { getLastTicket } from './getLastTicket.service';
import { getPendingTickets } from './getPendingTickets.service';
import { getWorkingOnTickets } from './getWorkingOnTickets.service';

export const services = {
  assignTicket,
  createTicket,
  doneTicket,
  getAllTicket,
  getLastTicket,
  getPendingTickets,
  getWorkingOnTickets,
};
