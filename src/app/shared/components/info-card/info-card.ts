import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCardComponent {
  @Input() label: string = '';
}