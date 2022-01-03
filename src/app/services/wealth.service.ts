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

  public randomizeValues(): void {
    wealthMock.wealthSummary.inbound.value = this.getRandomValue(
      1000000,
      2500000
    );
    wealthMock.wealthSummary.outbound.value = this.getRandomValue(
      1000000,
      2500000
    );

    wealthMock.weeklyWealths.forEach((week) => {
      week.wealths = week.wealths.map((value) => {
        if (value === 0) return value;
        return this.getRandomValue(-5, 5);
      });
    });
  }

  private getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
