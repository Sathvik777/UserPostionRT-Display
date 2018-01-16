import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthunticationManagerService } from './authuntication-manager.service';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BeaconFrame } from './beacon-frames/beacon-frames';
import { BeaconFrames } from './mock-beacon-frames';

@Injectable()
export class BeaconFramesService {


  baseUrl = "https://development.hd-wireless.com:9001";
  subscription: Subscription;
  private beaconFramesNew = new BehaviorSubject<BeaconFrame[]>(BeaconFrames);
  beaconFramesNewCast = this.beaconFramesNew.asObservable();



  constructor(private http: HttpClient, private authunticationManagerService: AuthunticationManagerService) { 
    console.log(" constructor BeaconPostionService "); 
    this.subscription = this.authunticationManagerService.
    getMessage().subscribe(message => { 
      this.getBeaconFramesRequest(message); 
    });

  }

  getBeaconFramesRequest(authunticationToken) : void{
    console.log(authunticationToken + "makeGetPostionRequest ");
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(this.baseUrl + "/beacons/12000000000256d9/frames", {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('Api-Version', '3')
            .set('X-Authenticate-Token', authunticationToken)
        })
        .toPromise()
        .then(
        data => {
          console.log(data);
          this.updateBeconFramse(data);
          resolve(data);
        },
        msg => {
          reject(msg);
        }
        );
    });

    return;
  }
  updateBeconFramse(data) {
    this.beaconFramesNew.next(data);
  }

}
