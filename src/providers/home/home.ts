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
export class HomeProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  match_list() {
    
    return this.http.get(global.cricketurl + global.match_list).map(data=>{
        var res = data.json();
        var resData = JSON.parse(JSON.stringify(res));
        return resData;
    })
    
  }

}
