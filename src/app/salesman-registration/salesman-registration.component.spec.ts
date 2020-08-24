import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanRegistrationComponent } from './salesman-registration.component';

describe('SalesmanRegistrationComponent', () => {
  let component: SalesmanRegistrationComponent;
  let fixture: ComponentFixture<SalesmanRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
