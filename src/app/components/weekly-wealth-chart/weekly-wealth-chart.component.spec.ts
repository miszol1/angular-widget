import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyWealthChartComponent } from './weekly-wealth-chart.component';

describe('WealthChartComponent', () => {
  let component: WeeklyWealthChartComponent;
  let fixture: ComponentFixture<WeeklyWealthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyWealthChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyWealthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
