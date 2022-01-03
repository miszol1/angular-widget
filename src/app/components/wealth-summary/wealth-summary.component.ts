import { Component, Input, OnInit } from '@angular/core';
import { WealthSummary } from 'src/app/models/wealth-summary';

@Component({
  selector: 'app-wealth-summary',
  templateUrl: './wealth-summary.component.html',
  styleUrls: ['./wealth-summary.component.scss'],
})
export class WealthSummaryComponent implements OnInit {
  @Input() public wealthSummary: WealthSummary;

  constructor() {}

  ngOnInit(): void {}
}
