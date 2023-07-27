import { TestBed } from '@angular/core/testing';

import { UseracccountService } from './useracccount.service';

describe('UseracccountService', () => {
  let service: UseracccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseracccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
