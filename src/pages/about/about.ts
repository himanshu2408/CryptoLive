import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrenciesProvider } from '../../providers/currencies/currencies';
import { CurrencyDetailPage} from "../currency-detail/currency-detail";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, protected currenciesProvider: CurrenciesProvider) {
    console.log('favs from favourites...', this.currenciesProvider.favourites);
  }
  selectCurrency(currency) {
    this.navCtrl.push(CurrencyDetailPage, {
      currency: currency
    });
    console.log(currency);
  }
}
