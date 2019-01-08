import { TestBed } from '@angular/core/testing';

import { AvioService } from '../services/avio.service';

describe('AviosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvioService = TestBed.get(AvioService);
    expect(service).toBeTruthy();
  });
});
