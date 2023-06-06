import { TestBed } from '@angular/core/testing';

import { ApiDigitacionServiceService } from './api-digitacion-service.service';

describe('ApiDigitacionServiceService', () => {
  let service: ApiDigitacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDigitacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
