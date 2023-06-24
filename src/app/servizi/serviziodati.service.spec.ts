import { TestBed } from '@angular/core/testing';

import { ServiziodatiService } from './serviziodati.service';

describe('ServiziodatiService', () => {
  let service: ServiziodatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiziodatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
