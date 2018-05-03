import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
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

      /*var headers = new Headers();
      headers.append('X-API-KEY', 'f23d996431b444ade4cac9e2da21bbea');
      var testForm = new FormData();
      // form.append('header',global.header);
      testForm.append('X-API-KEY','f23d996431b444ade4cac9e2da21bbea');
      /*testForm.append('username',form.value.email);
      testForm.append('password',form.value.password);
      testForm.append('username','praful.developer@gmail.com');
      testForm.append('password','admin@1234');
      this.http.post('https://payinbtc.com/api/v1/login',testForm, {headers:headers}).subscribe(data => {
        console.log(data);
        var res = data.json();
        console.log(res);
        if(res.error == false){
          /*this.nativeStorage.setItem('token', res.token);
          this.nativeStorage.setItem('id', res.user.id);
          this.nativeStorage.setItem('email', res.user.email);
          this.nativeStorage.setItem('company', res.user.company);
          this.nativeStorage.setItem('firstname', res.user.firstname);
          this.nativeStorage.setItem('lastname', res.user.lastname);
          this.nativeStorage.setItem('num_of_login', res.user.num_of_login);
          this.nativeStorage.setItem('status', res.user.status);
          let toast = this.toastCtrl.create({
            message: 'User was login successfully',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          loader.dismiss();
          this.navCtrl.setRoot(HomePage);
        }
        else {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Something wrong !',
            subTitle: res.msg,
            buttons: ['OK']
          });
          alert.present();
        }
      });*/
    }
  }

}
