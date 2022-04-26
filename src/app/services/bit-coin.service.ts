import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BitCoinService {
  constructor(private http: HttpClient) {}

  // private _contacts$ = new BehaviorSubject<Contact[]>([]);
  // public contacts$ = this._contacts$.asObservable();

  public getRate() {
    // return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1');

    return 0.00237;
  }

  public getMarketPrice() {
    return this.http
      .get<{ values: [{ x; y }] }>(
        'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
      )
      .pipe(
        map((res) => {
          const vals = res.values.map((item) => {
            return {
              name: new Date(item.x * 1000).toLocaleDateString('en-US'),
              value: item.y,
            };
          });
          return vals.slice(0, 20);
        })
      );
  }
  public getConfirmedTransactions() {
    // return this.http.get(
    //   'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    // );

    return this.http
      .get<{ values: [{ x; y }] }>(
        'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
      )
      .pipe(
        map((res) => {
          const vals = res.values.map((item) => {
            return {
              name: new Date(item.x * 1000).toLocaleDateString('en-US'),
              value: item.y,
            };
          });
          return vals.slice(0, 20);
        })
      );
  }
}

// return this.http.get<{ answer: string }>('https://yesno.wtf/api')
// .pipe(
//     map(res => res.answer)
// )
// }
