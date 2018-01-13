import { Injectable } from '@angular/core';
import { BeaconFrame } from './beacon-frames/beacon-frames';
import { BeaconFrames } from './mock-beacon-frames';


@Injectable()
export class ApiManagerService {

  getBeaconFrames() : BeaconFrame[] {
    return BeaconFrames;
  }

  constructor() { }

}
