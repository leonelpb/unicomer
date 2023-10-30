import { Component } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';
import { Card } from 'src/app/interfaces/card.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cards$!: Observable<Card[]>

  constructor(private cardService: CardsService){
  }

  ngOnInit(){
    this.cards$ = this.cardService.getCards();
  }
  numberMasking(number: string) {
    const cleanedNumber = number.replace(/\D/g, '');
    const lastFourDigits = cleanedNumber.slice(-4);
    const maskedPart = '****';
    let result = '';

    for (let i = 0; i < cleanedNumber.length - 4; i += 4) {
      result += '**** ';
    }

    result += lastFourDigits;

    return result;
  }
}
