import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCreateComponent } from './planner-create.component';

describe('PlannerCreateComponent', () => {
  let component: PlannerCreateComponent;
  let fixture: ComponentFixture<PlannerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
