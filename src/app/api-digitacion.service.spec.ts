import { TestBed } from '@angular/core/testing';

import { ApiDigitacionService } from './api-digitacion.service';

describe('ApiDigitacionService', () => {
  let service: ApiDigitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDigitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
