import { TestBed, inject } from '@angular/core/testing';

import { BeaconPostionService } from './beacon-postion.service';

describe('BeaconPostionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaconPostionService]
    });
  });

  it('should be created', inject([BeaconPostionService], (service: BeaconPostionService) => {
    expect(service).toBeTruthy();
  }));
});
