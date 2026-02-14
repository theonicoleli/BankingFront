import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from "../info-card/info-card";

@Component({
  selector: 'app-balance-view',
  imports: [InfoCardComponent, CommonModule],
  templateUrl: './balance-view.html',
  styleUrl: './balance-view.scss',
})
export class BalanceViewComponent {
  @Input() balance: number = 0;
  visible: boolean = true;
}
