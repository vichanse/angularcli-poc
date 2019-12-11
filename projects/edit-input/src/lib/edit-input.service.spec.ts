import { TestBed } from '@angular/core/testing';

import { EditInputService } from './edit-input.service';

describe('EditInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditInputService = TestBed.get(EditInputService);
    expect(service).toBeTruthy();
  });
});
