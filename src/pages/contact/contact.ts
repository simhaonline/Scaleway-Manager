import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {EmailComposer} from "@ionic-native/email-composer";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public subject: string = null;
  public message: string = null;

  constructor(public platform: Platform, public navCtrl: NavController,
              public navParams: NavParams, private emailComposer: EmailComposer,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //
  }

  sendMail(loginForm: NgForm) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });

    if (this.subject && this.message) {
      if (this.platform.is('cordova')) {
        loader.present();

        let email = {
          to: 'contact@matthias-prost.com',
          subject: '[Scaleway Manager][CONTACT]: ' + this.subject,
          body: this.message,
          isHtml: true
        };

        this.emailComposer.open(email).then(() => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Success: your message has been sent!',
            duration: 3000,
            position: 'top'
          });

          toast.present();
          this.navCtrl.pop();
        }).catch(error => {
          console.log(error);
        });
      }
    } else {
      const toast = this.toastCtrl.create({
        message: 'Error: subject or message is empty, please try again',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    }
  }

}
