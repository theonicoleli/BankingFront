import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BankingService } from '../../core/services/banking';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
import { EventRequest } from '../../core/domain/models/dtos';
import { CommonModule } from '@angular/common';
import { BalanceViewComponent } from '../../shared/components/balance-view/balance-view';
import { ModalComponent } from '../../shared/components/modal/modal';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BalanceViewComponent, ModalComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  accountId: string = '';
  balance: number = 0;
  errorMessage: string | null = null;
  isProcessing = false;
  showModal = false;
  modalConfig = { title: '', type: '' as any, showDest: false };

  constructor(
    private bank: BankingService, 
    private auth: AuthService, 
    private router: Router, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.accountId = this.auth.getAccountId() || '';
    if (!this.accountId) this.router.navigate(['/login']);
    this.load();
  }

  load() { this.bank.getBalance(this.accountId).subscribe(b => this.balance = b); }

  logout() { this.auth.logout(); this.router.navigate(['/login']); }

  operation(type: 'deposit' | 'withdraw' | 'transfer') {
    this.errorMessage = null;
    this.isProcessing = false;
    this.modalConfig = {
      type,
      title: type === 'deposit' ? 'Depositar' : type === 'withdraw' ? 'Sacar' : 'Transferir',
      showDest: type === 'transfer'
    };
    this.showModal = true;
  }

  onModalConfirm(event: {amount: number, destination?: string}) {
    this.isProcessing = true;
    this.errorMessage = null;
    const req: EventRequest = this.buildRequest(event);

    this.bank.postEvent(req).subscribe({
      next: () => {
        this.showModal = false;
        this.isProcessing = false;
        this.load();
      },
      error: (err) => {
        this.isProcessing = false;
        this.handleApiError(err);
      }
    });
  }

  private handleApiError(err: any): void {
    const errorMessages: Record<number, string> = {
      0: "Falha de conexão: O servidor não respondeu (CORS ou Offline).",
      400: "Dados inválidos ou saldo insuficiente.",
      404: "Conta não encontrada no sistema.",
      500: "Erro interno no servidor do banco."
    };

    this.errorMessage = errorMessages[err.status] ?? "Ocorreu um erro inesperado.";
    this.cdr.detectChanges();
  }

  private buildRequest(event: {amount: number, destination?: string}): EventRequest {
    const { type } = this.modalConfig;
    const req: EventRequest = { type, amount: event.amount };

    if (type === 'deposit') {
      req.destination = this.accountId;
      return req;
    }

    if (type === 'withdraw') {
      req.origin = this.accountId;
      return req;
    }

    req.origin = this.accountId;
    req.destination = event.destination;
    return req;
  }
}