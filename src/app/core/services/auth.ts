import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'user_account_id';

  login(id: string) { localStorage.setItem(this.KEY, id); }
  getAccountId(): string | null { return localStorage.getItem(this.KEY); }
  logout() { localStorage.removeItem(this.KEY); }
  isLoggedIn(): boolean { return !!this.getAccountId(); }
}