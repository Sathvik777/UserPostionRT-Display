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


@Injectable()
export class ApiManagerService implements OnInit{

   baseUrl = "https://development.hd-wireless.com:9001";
   beaconId = "12000000000256d9";
   authunticationToken = "";

  getBeaconFrames() : BeaconFrame[] {
    return BeaconFrames;
  }


  getPosition() : Position {

    if(this.authunticationToken.length < 1){
      this.getAuthenticateToken().then(function(){
        return this.makeGetPostionRequest();
       }
      ).then(function(){
        console.log("2nd function")
      })
      .catch(function(err){
        console.log(err);
      }).finally(function(){
        console.log("done")
      });
    }
    return PositionMock;
  }

  makeGetPostionRequest(): Observable<Position> {
   return this.http.get(this.baseUrl+"/beacons/12000000000256d9/pos",{
    headers: new HttpHeaders().set('Content-Type', 'application/json')
                              .set('Api-Version', '3')
                              .set('X-Authenticate-Token',this.authunticationToken)
                              }) 
   .pipe(
    tap(console.log(`fetched hero `)),
    catchError(this.handleError(`fetched hero `))
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
 
  constructor(private http: HttpClient) {
   }


   ngOnInit() : void {
     console.log("ngOnInit  ");
   }


  getAuthenticateToken() {
      let promise = new Promise((resolve, reject) => {
        this.http
        .post(this.baseUrl +'/login', Credentials, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Api-Version', '3')
                                    .set('X-Authenticate-User',Credentials.Id)
                                    .set('X-Authenticate-Password',Credentials.Password),
        })
        .toPromise()
        .then(
          data => {
            console.log(data['AuthenticateToken']);
            this.authunticationToken = data['AuthenticateToken'];
            resolve();
          },
          msg => { 
            reject(msg);
          }
        );
      });
    
  return promise;
  }

}
