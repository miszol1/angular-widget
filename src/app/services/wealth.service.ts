import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wealth } from '../models/wealth';
import { wealthMock } from './wealth.mock';

@Injectable({
  providedIn: 'root',
})
export class WealthService {
  constructor() {}

  public getWealth(): Observable<Wealth> {
    return of(wealthMock);
  }

  public getForecastedBalance(): Observable<number> {
    return of(1200000);
  }
}
