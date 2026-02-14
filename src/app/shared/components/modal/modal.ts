import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ModalComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() showDestination = false;
  @Input() errorMessage: string | null = null;
  @Input() loading = false;
  
  @Output() confirmed = new EventEmitter<{amount: number, destination?: string}>();
  @Output() cancelled = new EventEmitter<void>();

  value: number | null = null;
  destination: string = '';

  confirm() {
    if (this.value && this.value > 0) {
      this.confirmed.emit({ amount: this.value, destination: this.destination });
    }
  }

  close() { this.cancelled.emit(); }
}
