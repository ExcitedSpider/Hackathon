import { TestBed } from '@angular/core/testing';

import { ContentGetJsonService } from './content-get-json.service';

describe('ContentGetJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentGetJsonService = TestBed.get(ContentGetJsonService);
    expect(service).toBeTruthy();
  });
});
