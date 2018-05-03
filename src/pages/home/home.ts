import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HomeProvider } from "../../providers/home/home";
import { global } from '../../app/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  games: string;
  matches: string;
  countDown:any;
  counter = 6434;
  tick = 1000;
  resArr :any= [];
  current_date :any;
  latest_date :any='2018-05-03 18:18:22';
  teamImgUrl : any = global.teamImgUrl;
  constructor(public navCtrl: NavController,public datepipe: DatePipe,public home: HomeProvider, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.current_date =this.datepipe.transform(new Date(), 'yyyy-MM-dd H:m:s');
  }

  ngOnInit() {

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.home.match_list().subscribe(resData => {
      loader.dismiss();
      if (resData.status = true) {
        let i = 0;
        this.countDown = '';
        for(let data of resData.matches) {
          let matchTime = Date.parse(data.match_time);
          let currTime = Date.parse(this.current_date);
          let diffTime = (matchTime - currTime) / 1000;
          if(diffTime > 0) {
            this.countDown = Observable.timer(0, this.tick)
              .take(diffTime)
              .map(() => --diffTime)
          }
          this.resArr[i] = data;
          this.resArr[i]['countDown'] = this.countDown;
          i++;
          }
      } else {
        let toast = this.toastCtrl.create({
          message: resData.message,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    });

  }

  ionViewWillEnter(){
    this.games = "cricket";
    this.matches = "fixtures";
  }

}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return ('00' + hours).slice(-2) + 'h ' + ('00' + minutes).slice(-2) + 'm ' + ('00' + Math.floor(value - minutes * 60)).slice(-2) + 's';
  }

}