import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyContestsPage } from '../my-contests/my-contests';
import { ProfilePage } from "../profile/profile";
import { SettingPage } from "../setting/setting";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyContestsPage;
  tab3Root = ProfilePage;
  tab4Root = SettingPage;

  constructor() {

  }
}
