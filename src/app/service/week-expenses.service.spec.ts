import { TestBed } from '@angular/core/testing';

import { WeekExpensesService } from './week-expenses.service';

describe('WeekExpensesService', () => {
  let service: WeekExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
