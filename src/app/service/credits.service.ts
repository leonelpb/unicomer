import { Injectable } from '@angular/core';
import { Credit } from '../interfaces/credit.interface';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(
    private firestore:Firestore
  ) { }

  getCredits(): Observable<Credit[]> {
    const placeRef = collection(this.firestore, 'credits');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Credit[]>;
  }


}
