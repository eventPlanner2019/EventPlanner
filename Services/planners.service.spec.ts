import { TestBed } from '@angular/core/testing';

import { PlannersService } from './planners.service';

describe('PlannersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlannersService = TestBed.get(PlannersService);
    expect(service).toBeTruthy();
  });
});
