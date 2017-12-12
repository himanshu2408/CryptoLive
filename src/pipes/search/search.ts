import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(currencies: Object[], searchText?: string) {
    if (!currencies) {
      return [];
    }
    if (!searchText) {
      return currencies;
    }
    searchText = searchText.toLowerCase();
    return currencies.filter( currency => {
      if (currency['name']) {
        return currency['name'].toLowerCase().includes(searchText);
      }
      return currencies;
    });
  }
}
