import { TestBed } from '@angular/core/testing';

import { UppercaseconverterService } from './uppercaseconverter.service';

describe('UppercaseconverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UppercaseconverterService = TestBed.get(UppercaseconverterService);
    expect(service).toBeTruthy();
  });
});
