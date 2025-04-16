import { TestBed } from '@angular/core/testing';

import { ContactArrayService } from './contact-array.service';

describe('ContactArrayService', () => {
  let service: ContactArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
