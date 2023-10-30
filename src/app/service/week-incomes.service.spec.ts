import { TestBed } from '@angular/core/testing';

import { WeekIncomesService } from './week-incomes.service';

describe('WeekIncomesService', () => {
  let service: WeekIncomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekIncomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
