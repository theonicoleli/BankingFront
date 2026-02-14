import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventRequest, EventResponse } from '../domain/models/dtos';

@Injectable({ providedIn: 'root' })
export class BankingService {
  private readonly API_URL = 'https://bankingsystem-production-d907.up.railway.app';

  constructor(private http: HttpClient) {}

  getBalance(accountId: string): Observable<number> {
    return this.http.get<number>(`${this.API_URL}/balance?account_id=${accountId}`);
  }

  postEvent(event: EventRequest): Observable<EventResponse> {
    return this.http.post<EventResponse>(`${this.API_URL}/event`, event);
  }

  reset(): Observable<string> {
    return this.http.post(`${this.API_URL}/reset`, {}, { responseType: 'text' });
  }
}