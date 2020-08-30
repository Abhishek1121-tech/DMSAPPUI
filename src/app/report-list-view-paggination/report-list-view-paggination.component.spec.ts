import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListViewPagginationComponent } from './report-list-view-paggination.component';

describe('ReportListViewPagginationComponent', () => {
  let component: ReportListViewPagginationComponent;
  let fixture: ComponentFixture<ReportListViewPagginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListViewPagginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListViewPagginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
