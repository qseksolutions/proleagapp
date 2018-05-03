import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  games: string;
  matches: string;
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter(){
    this.games = "cricket";
    this.matches = "fixtures";
  }

}
