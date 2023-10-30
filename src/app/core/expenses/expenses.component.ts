import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions.service';
import { Transaction } from 'src/app/interfaces/transaction.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  transactions: Transaction[] = [];
  totalExpense$!: Observable<number>;

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.totalExpense$ = this.transactionService.getTransactions().pipe(
      map((transactions: Transaction[]) => {
        const filteredTransactions = transactions.filter((transaction: { type: string; }) => transaction.type === 'expense');
        const amounts = filteredTransactions.map((transaction: { amount: string | number; }) => +transaction.amount);
        return amounts.reduce((acc: any, number: any) => acc + number, 0);
      })
    );
    console.log(this.totalExpense$)
  }
}
