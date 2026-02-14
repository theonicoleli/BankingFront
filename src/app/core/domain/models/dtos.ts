export interface Account { id: string; balance: number; }
export type EventType = 'deposit' | 'withdraw' | 'transfer';

export interface EventRequest {
  type: EventType;
  amount: number;
  origin?: string;
  destination?: string;
}

export interface EventResponse {
  origin?: Account;
  destination?: Account;
}