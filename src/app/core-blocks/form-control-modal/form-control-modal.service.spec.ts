import { TestBed } from '@angular/core/testing';

import { FormControlModalService } from './form-control-modal.service';

describe('FormControlModalService', () => {
  let service: FormControlModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
