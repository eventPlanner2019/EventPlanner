import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerlistComponent } from './plannerlist.component';

describe('PlannerlistComponent', () => {
  let component: PlannerlistComponent;
  let fixture: ComponentFixture<PlannerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
