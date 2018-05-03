import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { global } from '../../app/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  login(email, password) {
    
    var body = new FormData();
    body.append("useremail", email);
    body.append("password", password);

    return this.http.post(global.apiurl + global.login, body).map((response: Response) => response);
    
  }

}
