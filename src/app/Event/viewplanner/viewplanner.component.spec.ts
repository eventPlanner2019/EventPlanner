import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplannerComponent } from './viewplanner.component';

describe('ViewplannerComponent', () => {
  let component: ViewplannerComponent;
  let fixture: ComponentFixture<ViewplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
