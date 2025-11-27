import { TestBed } from '@angular/core/testing';

import { TracksService } from './tracks.service';
import { HttpClient } from '@angular/common/http';

describe('TracksService', () => {
  let service: TracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
