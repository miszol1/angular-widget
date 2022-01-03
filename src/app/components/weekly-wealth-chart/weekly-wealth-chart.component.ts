import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { WeeklyWealth } from 'src/app/models/weekly-wealth';

@Component({
  selector: 'app-weekly-wealth-chart',
  templateUrl: './weekly-wealth-chart.component.html',
  styleUrls: ['./weekly-wealth-chart.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state(
        'positive',
        style({
          'margin-top': '0rem',
        })
      ),
      state(
        'negative',
        style({
          'margin-top': '0.625rem',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})
export class WeeklyWealthChartComponent implements OnInit {
  @Input() weeklyWealth: WeeklyWealth;

  constructor() {}

  ngOnInit(): void {}

  public isLastValuePositive(index: number): boolean {
    const array = this.weeklyWealth.wealths.slice(0, index + 1).reverse();
    const result = array.find((value) => value !== 0) || 0;
    return result > 0;
  }

  public trackBar(index: number): number {
    return index;
  }
}
