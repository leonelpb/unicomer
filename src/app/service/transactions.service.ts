import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction.interface';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor( private firestore:Firestore ) { }

  getTransactions(): Observable<Transaction[]> {
    const placeRef = collection(this.firestore, 'transactions');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Transaction[]>;
  }
}
