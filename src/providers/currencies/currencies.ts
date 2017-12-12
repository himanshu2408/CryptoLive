import { Http } from '@angular/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CurrenciesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrenciesProvider {
  currencies = [];
  favourites = [];
  @Output() onGettingFavourites: EventEmitter<any> = new EventEmitter<any>();
  constructor(public http: Http, private storage: Storage) {
    console.log('Hello CurrenciesProvider Provider');
  }
  getCurrencies() {
    this.http.get('http://localhost:3000').map(res => res.json()).subscribe(data => {
      this.currencies = data;
      console.log(data);
    });
  }
  getFavourites() {
    this.storage.get('favourites').then((value) => {
      console.log('val from storage...', value);
      if(value !== null) {
        this.favourites = value;
      }
      this.onGettingFavourites.emit(true);
    });
    console.log('fav from service...' , this.favourites);
  }
  markAsFavourite(currency) {
    this.favourites.push(currency);
    this.storage.set('favourites', this.favourites);
    console.log('favourites...', this.favourites);
    console.log('storage....' ,this.storage.get('favourites'));
  }
  markAsUnfavourite(currency) {
    this.favourites.forEach((favourite, index) => {
      if (favourite.name === currency.name) {
        this.favourites.splice(index, 1);
        this.storage.set('favourites', this.favourites);
      }
    });
  }
  isFavourite(currency): boolean {
    this.favourites.forEach((favourite) => {
      if(favourite.name === currency.name) {
        console.log('fav name: ', favourite.name, 'curr currency name: ', currency.name);
        return true;
      }
    });
    return false;
  }

}
