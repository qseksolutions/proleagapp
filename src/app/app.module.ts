import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { DatePipe } from '@angular/common'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage, FormatTimePipe } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RefRegisterPage } from '../pages/ref-register/ref-register';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { SettingPage } from "../pages/setting/setting";
import { ProfilePage } from "../pages/profile/profile";
import { MyContestsPage } from "../pages/my-contests/my-contests";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { HomeProvider } from '../providers/home/home';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ForgotpasswordPage,
    SettingPage,
    ProfilePage,
    MyContestsPage,
<<<<<<< HEAD
    FormatTimePipe
=======
    RefRegisterPage,
>>>>>>> 0708a0166a84f78f50f8b3488e809726c7b4e52d
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage, 
    ForgotpasswordPage,
    SettingPage,
    ProfilePage,
    MyContestsPage,
    RefRegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
<<<<<<< HEAD
    NativeStorage,
    DatePipe,
    HomeProvider
=======
    NativeStorage
>>>>>>> 0708a0166a84f78f50f8b3488e809726c7b4e52d
  ]
})
export class AppModule {}
