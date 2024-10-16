import { Ticket } from './Ticket.type';

export interface ServerResponse {
  status: boolean;
  message?: string;
  statusCode: number;
  data?: Ticket[] | Ticket | null;
}
