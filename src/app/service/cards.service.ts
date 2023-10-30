import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private firestore: Firestore) { }

  getCards(): Observable<Card[]> {
    const placeRef = collection(this.firestore, 'cards');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Card[]>;
  }
}
