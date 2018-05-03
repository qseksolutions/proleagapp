// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  login(email, password) {

    var body = new FormData();
    body.append("useremail", email);
    body.append("password", password);

    return this.http.post(global.userapiurl + global.login, body).map(data => {
      var res = data.json();
      var resData = JSON.parse(JSON.stringify(res));
      return resData;
    })
  }

  register(data) {

    var body = new FormData();
    body.append("useremail", data.email);
    body.append("password", data.password);
    if (data.referal != undefined && data.referal != null && data.referal != '') {
      body.append("referal", data.referal);
    }

    return this.http.post(global.userapiurl + global.register, body).map(data => {
      var res = data.json();
      var resData = JSON.parse(JSON.stringify(res));
      return resData;
    })
  }

  forgot_password(email) {

    var body = new FormData();
    body.append("user_email", email);

    return this.http.post(global.userapiurl + global.forgot_password, body).map(data => {
      var res = data.json();
      var resData = JSON.parse(JSON.stringify(res));
      return resData;
    })
  }
  
}
