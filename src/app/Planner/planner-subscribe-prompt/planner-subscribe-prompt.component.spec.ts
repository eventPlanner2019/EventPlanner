import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerSubscribePromptComponent } from './planner-subscribe-prompt.component';

describe('PlannerSubscribePromptComponent', () => {
  let component: PlannerSubscribePromptComponent;
  let fixture: ComponentFixture<PlannerSubscribePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerSubscribePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerSubscribePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
