import { Injectable } from '@angular/core';
import { BeaconFrame } from './beacon-frames/beacon-frames';
import { BeaconFrames } from './mock-beacon-frames';
import { Position } from './position/position';
import { PositionMock } from './mock-position';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './user-credentials-data';


@Injectable()
export class ApiManagerService implements OnInit{

   baseUrl = "https://development.hd-wireless.com:9001";
   beaconId = "12000000000256d9";
   authunticationToken = "";

  getBeaconFrames() : BeaconFrame[] {
    return BeaconFrames;
  }


  getPosition() : Position {
    this.http.get(this.baseUrl + '/beacons/'+ this.beaconId +'/pos', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Api-Version', '3')
                                .set('Authenticate-Token',this.authunticationToken)
    })
    .subscribe(data => {
      console.log(data);
    });
    return PositionMock;
  }
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .post(this.baseUrl +'/login', Credentials, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Api-Version', '3')
                                .set('X-Authenticate-User',Credentials.Id)
                                .set('X-Authenticate-Password',Credentials.Password),
    })
    .subscribe(data => {
      console.log(data);
      this.authunticationToken = data['AuthenticateToken'];
    });

  }

}
