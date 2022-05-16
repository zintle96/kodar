import { TestBed } from '@angular/core/testing';

import { AyobaService } from './ayoba.service';

describe('AyobaService', () => {
  let service: AyobaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyobaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
