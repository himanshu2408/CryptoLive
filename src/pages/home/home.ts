import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrenciesProvider } from '../../providers/currencies/currencies';
import { CurrencyDetailPage} from "../currency-detail/currency-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, protected currenciesProvider: CurrenciesProvider) {
      this.currenciesProvider.getFavourites();
  }
  selectCurrency(currency) {
    this.navCtrl.push(CurrencyDetailPage, {
      currency: currency
    });
    console.log(currency);
  }
  ngOnInit() {
    this.currenciesProvider.onGettingFavourites.subscribe((val) => {
      this.currenciesProvider.getCurrencies();
    });
  }
}
