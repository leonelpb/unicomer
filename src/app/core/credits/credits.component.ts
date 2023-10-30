import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from 'src/app/interfaces/credit.interface';
import { CreditsService } from 'src/app/service/credits.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {
  credits$!:Observable<Credit[]> ;

  constructor(
    private creditsService:CreditsService
  ){
  }
  ngOnInit(){
    this.credits$ = this.creditsService.getCredits();
    console.log(this.credits$)
  }
  isChecked(credit:Credit){
    credit.checked = !credit.checked;
  }

}
