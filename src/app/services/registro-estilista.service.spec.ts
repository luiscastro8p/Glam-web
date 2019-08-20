import { TestBed } from '@angular/core/testing';

import { RegistroEstilistaService } from './registro-estilista.service';

describe('RegistroEstilistaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroEstilistaService = TestBed.get(RegistroEstilistaService);
    expect(service).toBeTruthy();
  });
});
