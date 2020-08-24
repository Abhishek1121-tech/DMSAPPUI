import { TestBed } from '@angular/core/testing';

import { CustomerRegistrationSvcService } from './customer-registration-svc.service';

describe('CustomerRegistrationSvcService', () => {
  let service: CustomerRegistrationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRegistrationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
