import { TestBed, inject } from '@angular/core/testing';

import { SalesmanRegistrationSvcService } from './salesman-registration-svc.service';

describe('SalesmanRegistrationSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesmanRegistrationSvcService]
    });
  });

  it('should be created', inject([SalesmanRegistrationSvcService], (service: SalesmanRegistrationSvcService) => {
    expect(service).toBeTruthy();
  }));
});
