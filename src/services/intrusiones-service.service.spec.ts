import { TestBed } from '@angular/core/testing';

import { IntrusionesService } from './intrusiones-service.service';

describe('IntrusionesService', () => {
  let service: IntrusionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrusionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
