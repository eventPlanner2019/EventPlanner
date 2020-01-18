import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerPaymentPageComponent } from './planner-payment-page.component';

describe('PlannerPaymentPageComponent', () => {
  let component: PlannerPaymentPageComponent;
  let fixture: ComponentFixture<PlannerPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
