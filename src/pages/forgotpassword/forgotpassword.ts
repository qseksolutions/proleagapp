import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  todo = {
    email: '',
  };
  regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public user: UserProvider) {
  }

  gotoregister() {
    this.navCtrl.push(RegisterPage);
  }

  gotologin() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  ForgotForm(form) {
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
    else {
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
      });
      loader.present();

      this.user.forgot_password(form.value.email).subscribe(resData => {
        console.log(resData);
        if (resData.status == true) {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: resData.message,
            duration: 6000,
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
