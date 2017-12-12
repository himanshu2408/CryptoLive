import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrenciesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrenciesProvider {
  currencies = [];
  constructor(public http: Http) {
    console.log('Hello CurrenciesProvider Provider');
  }
  getCurrencies() {
    this.http.get('http://localhost:3000').map(res => res.json()).subscribe(data => {
      this.currencies = data;
      console.log(data);
    });
  }
}
