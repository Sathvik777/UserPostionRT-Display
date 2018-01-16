import { TestBed, inject } from '@angular/core/testing';

import { BeaconFramesService } from './beacon-frames.service';

describe('BeaconFramesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaconFramesService]
    });
  });

  it('should be created', inject([BeaconFramesService], (service: BeaconFramesService) => {
    expect(service).toBeTruthy();
  }));
});
