import { TestBed } from '@angular/core/testing';

import { BillingCreationSvcService } from './billing-creation-svc.service';

describe('BillingCreationSvcService', () => {
  let service: BillingCreationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingCreationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
