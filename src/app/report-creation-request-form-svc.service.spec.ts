import { TestBed } from '@angular/core/testing';

import { ReportCreationRequestFormSvcService } from './report-creation-request-form-svc.service';

describe('ReportCreationRequestFormSvcService', () => {
  let service: ReportCreationRequestFormSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCreationRequestFormSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
