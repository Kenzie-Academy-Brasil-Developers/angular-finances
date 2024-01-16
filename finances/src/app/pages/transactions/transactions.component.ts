import { Component } from '@angular/core';
import { RegisterTransactionFormComponent } from '../../components/forms/register-transaction-form/register-transaction-form.component';
import { TotalComponent } from '../../components/total/total.component';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [RegisterTransactionFormComponent, TotalComponent, TransactionCardComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
