import { Injectable, signal } from '@angular/core';
import {
  ITransaction,
  TTransactionRegisterFormData,
} from '../interfaces/transaction.interface';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly transactionList = signal<ITransaction[]>([]);

  getTransactionList() {
    return this.transactionList();
  }

  addTransaction(formData: TTransactionRegisterFormData) {
    const newTransaction = { ...formData, id: crypto.randomUUID() };

    this.transactionList.update((transactionList) => [
      ...transactionList,
      newTransaction,
    ]);
  }

  removeTransaction(removingId: string) {
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id !== removingId)
    );
  }
}
