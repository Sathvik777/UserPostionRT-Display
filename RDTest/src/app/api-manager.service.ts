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


@Injectable()
export class ApiManagerService implements OnInit{

   baseUrl = "https://development.hd-wireless.com:9001";
   beaconId = "12000000000256d9";
   authunticationToken = "";

  getBeaconFrames() : BeaconFrame[] {
    return BeaconFrames;
  }


  getPosition() : Position {
    this.makeGetPostionRequest();
    
    return PositionMock;
  }

  makeGetPostionRequest() : void {
    this.http.get(this.baseUrl+"/beacons/12000000000256d9/pos",{
    headers: new HttpHeaders().set('Content-Type', 'application/json')
                              .set('Api-Version', '3')
                              .set('X-Authenticate-Token',this.authunticationToken)
                              }) 
   .subscribe(
    data => {
      console.log(data);
    }

   );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  constructor(private http: HttpClient,
     authunticationManagerService: AuthunticationManagerService) {
    this.authunticationToken = authunticationManagerService.getAuthenticateToken();
      console.log(this.authunticationToken);
   }


   ngOnInit() : void {
     console.log("ngOnInit  ");
   }

}
