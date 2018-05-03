import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContestsPage } from './my-contests';

@NgModule({
  declarations: [
    MyContestsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContestsPage),
  ],
})
export class MyContestsPageModule {}
