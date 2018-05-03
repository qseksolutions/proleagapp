import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { UserProvider } from "../../providers/user/user";
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';
import { RefRegisterPage } from '../ref-register/ref-register';

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
  is_login: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public user: UserProvider, private nativeStorage: NativeStorage) {
    this.is_login = this.nativeStorage.getItem('is_login');
    console.log(this.is_login);
    if (this.is_login == true) {
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotorefregister() {
    this.navCtrl.push(RefRegisterPage);
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
        console.log(resData);
        if (resData.status = true) {
          this.nativeStorage.setItem('is_login', resData.status);
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
          this.navCtrl.push(HomePage);
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
