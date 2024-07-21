import { TestBed } from '@angular/core/testing';

import { AmenazasService } from './amenazas-service.service';

describe('AmenazasServiceService', () => {
  let service: AmenazasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenazasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
