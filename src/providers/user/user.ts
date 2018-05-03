// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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

    return this.http.post(global.apiurl + global.login, body).map(data=>{
        var res = data.json();
        var resData = JSON.parse(JSON.stringify(res));
        return resData;
    })
    
  }

<<<<<<< HEAD
  forgot_password(email) {

    var body = new FormData();
    body.append("user_email", email);

    return this.http.post(global.userapiurl + global.forgot_password, body).map(data => {
      var res = data.json();
      var resData = JSON.parse(JSON.stringify(res));
      return resData;
    })
  }
  
=======
>>>>>>> 33b1bd3c33a6cc9cb502992132858e40cb975618
}
