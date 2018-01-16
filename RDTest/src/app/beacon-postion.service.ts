import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './user-credentials-data';
import { Promise } from 'es6-promise';
import { ApiManagerService } from './api-manager.service';
import { AuthunticationManagerService } from './authuntication-manager.service';
import { Position } from './position/position';

@Injectable()
export class BeaconPostionService {

  baseUrl = "https://development.hd-wireless.com:9001";
  constructor(private http: HttpClient, private apiManager : ApiManagerService, 
    private authunticationManager: AuthunticationManagerService) {
      console.log(" constructor BeaconPostionService "); 
      this.getPosition();
    }



  getPosition(){
  this.authunticationManager.getAuthenticateToken().then(
    function (authenticateToken) {
      console.log(authenticateToken);
      return authenticateToken;
    }
  ).then(function (data) {
    this.makeGetPostionRequest(data);
    console.log(data);
  }).catch(
    function (err) {
      console.log(err);
    }
    );
  }

  makeGetPostionRequest(authunticationToken) {
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
          newPosition.Lattitude = data['Lattitude'];
          newPosition.Longitude = data['Longitude'];
          this.apiManager.updatePostion(newPosition);
          resolve(data);
        },
        msg => {
          reject(msg);
        }
        );
    });

    return promise;
  }
}
