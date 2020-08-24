import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCreationComponent } from './billing-creation.component';

describe('BillingCreationComponent', () => {
  let component: BillingCreationComponent;
  let fixture: ComponentFixture<BillingCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
