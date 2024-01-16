import { Component, Input } from '@angular/core';
import { ITransaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss'
})
export class TransactionCardComponent {
  @Input() transaction!: ITransaction;
}
