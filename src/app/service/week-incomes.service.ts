import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { DayIncome } from '../interfaces/week-operations.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeekIncomesService {

  constructor(private firestore:Firestore) { }

  getAllWIncomes(): Observable<DayIncome[]> {
    const placeRef = collection(this.firestore, 'week-incomes');
    return collectionData(placeRef, { idField: 'id' }) as Observable<DayIncome[]>;
  }
}
