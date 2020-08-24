import { TestBed } from '@angular/core/testing';

import { PaymentCreationSvcService } from './payment-creation-svc.service';

describe('PaymentCreationSvcService', () => {
  let service: PaymentCreationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCreationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
