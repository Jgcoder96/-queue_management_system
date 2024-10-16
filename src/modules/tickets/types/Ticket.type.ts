export interface Ticket {
  procedure_id: string;
  type: string;
  subject: string;
  is_attended: boolean;
  created_at: Date;
  finished_at: Date | null;
  user_id: string;
  staff_id: string | null;
}
