import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  accId: string = '';
  constructor(private auth: AuthService, private router: Router) {}
  onLogin() {
    if (this.accId) {
      this.auth.login(this.accId);
      this.router.navigate(['/dashboard']);
    }
  }
}
