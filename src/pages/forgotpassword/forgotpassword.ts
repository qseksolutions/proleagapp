import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
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
