import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './user-credentials-data';
import { Promise } from 'es6-promise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthunticationManagerService {
  baseUrl = "https://development.hd-wireless.com:9001";
  private subjectAuthToken = new Subject<String>();

  constructor(private http: HttpClient) {
    this.postAuthenticateRequest();
   }

  getAuthenticateToken(): any {
    return this.postAuthenticateRequest().then(function (authenticateToken) {
      console.log(authenticateToken);
      return authenticateToken;
    }).catch(function (err) {
      console.log(err);
    });

  }

  sendMessage(message: string) {
    this.subjectAuthToken.next(message);
  }
  getMessage(): Observable<String> {
    return this.subjectAuthToken.asObservable();
  }

  postAuthenticateRequest() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + '/login', Credentials, {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
            .set('Api-Version', '3')
            .set('X-Authenticate-User', Credentials.Id)
            .set('X-Authenticate-Password', Credentials.Password),
        })
        .toPromise()
        .then(
        data => {
          this.sendMessage(data['AuthenticateToken']);
          resolve(data['AuthenticateToken']);
        },
        msg => {
          reject(msg);
        }
        );
    });

    return promise;
  }

}
