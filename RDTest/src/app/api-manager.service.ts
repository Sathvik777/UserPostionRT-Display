import { Injectable } from '@angular/core';
import { BeaconFrame } from './beacon-frames/beacon-frames';
import { BeaconFrames } from './mock-beacon-frames';
import { Position } from './position/position';
import { PositionMock } from './mock-position';


@Injectable()
export class ApiManagerService {

  getBeaconFrames() : BeaconFrame[] {
    return BeaconFrames;
  }


  getPosition() : Position {
    return PositionMock;
  }
 
  constructor() { }

}
