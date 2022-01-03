import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wealth } from 'src/app/models/wealth';
import { WealthService } from 'src/app/services/wealth.service';

@Component({
  selector: 'app-wealth-widget',
  templateUrl: './wealth-widget.component.html',
  styleUrls: ['./wealth-widget.component.scss'],
})
export class WealthWidgetComponent implements OnInit {
  public wealth$: Observable<Wealth>;
  public forecastedBalance$: Observable<number>;

  constructor(private wealthService: WealthService) {}

  public ngOnInit() {
    this.wealth$ = this.getWealth();
    this.forecastedBalance$ = this.getForecastedBalance();
  }

  public randomizeValues(): void {
    this.wealthService.randomizeValues();
  }

  private getForecastedBalance(): Observable<number> {
    return this.wealthService.getForecastedBalance();
  }

  private getWealth(): Observable<Wealth> {
    return this.wealthService.getWealth();
  }
}
