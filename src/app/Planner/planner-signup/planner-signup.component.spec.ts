import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerSignupComponent } from './planner-signup.component';

describe('PlannerSignupComponent', () => {
  let component: PlannerSignupComponent;
  let fixture: ComponentFixture<PlannerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
