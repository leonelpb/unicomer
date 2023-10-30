import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { DayExpense } from '../interfaces/week-operations.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeekExpensesService {

  constructor(private firestore: Firestore) { }

  getAllWExpenses(): Observable<DayExpense[]> {
    const placeRef = collection(this.firestore, 'week-expenses');
    return collectionData(placeRef, { idField: 'id' }) as Observable<DayExpense[]>;
  }
}
