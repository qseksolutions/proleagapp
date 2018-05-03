import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
// import { NativeStorage } from '@ionic-native/native-storage';
import { UserProvider } from "../../providers/user/user";
import { LoginPage } from '../login/login';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { RefRegisterPage } from '../ref-register/ref-register';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  todo = {
    email: '',
    password: '',
    conpassword: '',
  };
  regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotorefregister() {
    this.navCtrl.push(RefRegisterPage);
  }

  gotoforgot() {
    this.navCtrl.push(ForgotpasswordPage);
  }

  gotologin() {
    this.navCtrl.push(LoginPage);
  }

  registerForm(form) {
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
    else if (form.value.password != form.value.conpassword) {
      let toast = this.toastCtrl.create({
        message: 'Password don\'t match',
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

      this.user.register(form.value).subscribe(resData => {
        console.log(resData);
        if (resData.status = true) {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: resData.message,
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.push(LoginPage);
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
