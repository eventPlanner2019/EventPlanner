import { TestBed } from '@angular/core/testing';

import { LogOutServiceService } from './log-out-service.service';

describe('LogOutServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogOutServiceService = TestBed.get(LogOutServiceService);
    expect(service).toBeTruthy();
  });
});
