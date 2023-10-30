export interface Card {
  cardType: 'credit' | 'debit';
  cardBalance:string;
  cardNumber: string;
  month: string;
  year: string;
  ownerName: string;
  cvv: string;
  userId: string;
}
