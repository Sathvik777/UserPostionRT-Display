import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './user-credentials-data';
import { Promise } from 'es6-promise';
import { ApiManagerService } from './api-manager.service';
import { AuthunticationManagerService } from './authuntication-manager.service';
import { Position } from './position/position';
import { PositionMock } from './mock-position';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BeaconPostionService {

  baseUrl = "https://development.hd-wireless.com:9001";
  subscription: Subscription;

  private positionOfBeacon = new BehaviorSubject<Position>(PositionMock);
  positionOfBeaconCast = this.positionOfBeacon.asObservable();


  constructor(private http: HttpClient, private authunticationManagerService: AuthunticationManagerService) {
      console.log(" constructor BeaconPostionService "); 
      this.subscription = this.authunticationManagerService.
      getMessage().subscribe(message => { 
        this.makeGetPostionRequest(message); 
      });
    }
    
 

  makeGetPostionRequest(authunticationToken) {
    console.log(authunticationToken + "makeGetPostionRequest ");
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/beacons/12000000000256d9/pos", {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('Api-Version', '3')
            .set('X-Authenticate-Token', authunticationToken)
        })
        .toPromise()
        .then(
        data => {
          console.log(data);
          let newPosition = new Position();
          newPosition.Beacon = data['Beacon'];
          newPosition.Latitude = data['Latitude'];
          newPosition.Longitude = data['Longitude'];
          this.updatePostion(newPosition);
          resolve(data);
        },
        msg => {
          reject(msg);
        }
        );
    });

    return promise;
  }
  getPosition(): Position {

    return PositionMock;
  }
  updatePostion(newPosition) {
    this.positionOfBeacon.next(newPosition);
  }



}
