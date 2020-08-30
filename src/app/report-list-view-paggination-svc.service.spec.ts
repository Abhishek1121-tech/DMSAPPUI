import { TestBed } from '@angular/core/testing';

import { ReportListViewPagginationSvcService } from './report-list-view-paggination-svc.service';

describe('ReportListViewPagginationSvcService', () => {
  let service: ReportListViewPagginationSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportListViewPagginationSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
