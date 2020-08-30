import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCreationRequestFormComponent } from './report-creation-request-form.component';

describe('ReportCreationRequestFormComponent', () => {
  let component: ReportCreationRequestFormComponent;
  let fixture: ComponentFixture<ReportCreationRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCreationRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCreationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
