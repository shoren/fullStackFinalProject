import { TestBed } from '@angular/core/testing';

import { PartsService } from './part.service';

describe('PartService', () => {
  let service: PartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
