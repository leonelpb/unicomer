import { Component } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions.service';
import { Transaction } from 'src/app/interfaces/transaction.interface';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.scss']
})
export class LastTransactionsComponent {

  transactions$: Observable<Transaction[]> | undefined;


  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.transactions$ = this.transactionService.getTransactions();
    console.log(this.transactions$)
  }
  getStatusColor(status:string) {
    let color = '';
    switch (status) {
      case 'completed':
        color = '#4aa38d';
        break;
      case 'pending':
        color = '#c6c5c5';
        break;
      case 'canceled':
        color = '#e66567';
        break;
      default:
        color = 'initial'; // Default text color
        break;
    }
    return { 'color': color };
  }
}
