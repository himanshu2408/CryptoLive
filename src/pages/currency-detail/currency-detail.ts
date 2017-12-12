import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CurrencyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currency-detail',
  templateUrl: 'currency-detail.html',
})
export class CurrencyDetailPage {

  currency = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currency = this.navParams.get('currency');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencyDetailPage');
  }

}
