import { TestBed } from '@angular/core/testing';

import { LocalTreeParserService } from './local-tree-parser.service';

describe('LocalTreeParserService', () => {
  let service: LocalTreeParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTreeParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
