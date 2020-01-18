import { TestBed } from '@angular/core/testing';

import { CancelEventService } from './cancel-event.service';

describe('CancelEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancelEventService = TestBed.get(CancelEventService);
    expect(service).toBeTruthy();
  });
});
