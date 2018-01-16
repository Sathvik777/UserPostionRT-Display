import { Injectable } from '@angular/core';
import { BeaconFrame } from './beacon-frames/beacon-frames';
import { BeaconFrames } from './mock-beacon-frames';
import { Position } from './position/position';
import { PositionMock } from './mock-position';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './user-credentials-data';
import { Promise } from 'es6-promise';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AuthunticationManagerService } from './authuntication-manager.service';
import { BeaconPostionService } from './beacon-postion.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ApiManagerService implements OnInit {


  authunticationToken = "";

  private positionOfBeacon = new BehaviorSubject<Position>(PositionMock);
  positionOfBeaconCast = this.positionOfBeacon.asObservable();
  getBeaconFrames(): BeaconFrame[] {
    return BeaconFrames;
  }


  getPosition(): Position {
    


    return PositionMock;
  }


  updatePostion(newPosition) {
    this.positionOfBeacon.next(newPosition);
  }


  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    console.log("ngOnInit  ");
  }

}
