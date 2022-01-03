import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WealthSummaryComponent } from './components/wealth-summary/wealth-summary.component';
import { WealthWidgetComponent } from './components/wealth-widget/wealth-widget.component';
import { WeeklyWealthChartComponent } from './components/weekly-wealth-chart/weekly-wealth-chart.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { WidgetComponent } from './components/widget/widget.component';
@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetHeaderComponent,
    WealthWidgetComponent,
    WealthSummaryComponent,
    WeeklyWealthChartComponent,
  ],
  imports: [BrowserModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
