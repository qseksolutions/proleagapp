import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { UserProvider } from "../../providers/user/user";
import { Http } from "@angular/http";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  todo = {
    email: '',
    password: ''
  };
  regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public user: UserProvider, private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoforgot() {
    this.navCtrl.push(ForgotpasswordPage);
  }

  gotoregister() {
    this.navCtrl.push(RegisterPage);
  }

  logForm(form) {
    // console.log(form.value.email.length);
    if (form.value.email == '') {
      let toast = this.toastCtrl.create({
        message: 'Please enter email',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else if (form.value.email.length == 0 || !this.regex.test(this.todo['email'])) {
      let toast = this.toastCtrl.create({
        message: 'Please enter valid email',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else if (form.value.password == '') {
      let toast = this.toastCtrl.create({
        message: 'Please enter password',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else if (form.value.password.length < 6) {
      let toast = this.toastCtrl.create({
        message: 'Password must be six character',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
      });
      loader.present();

      this.user.login(form.value.email, form.value.password).subscribe(resData => {
        if (resData.status == true) {
          this.nativeStorage.setItem('user_id', resData.user.user_id);
          this.nativeStorage.setItem('user_fullname', resData.user.user_fullname);
          this.nativeStorage.setItem('user_email', resData.user.user_email);
          this.nativeStorage.setItem('userdata', resData.user);
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: resData.message,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        } else {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: resData.message,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      });
    }
  }

}
