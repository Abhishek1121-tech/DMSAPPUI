import { TestBed } from '@angular/core/testing';

import { ExpenseCreationSvcService } from './expense-creation-svc.service';

describe('ExpenseCreationSvcService', () => {
  let service: ExpenseCreationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseCreationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
