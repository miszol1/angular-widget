import { WealthSummary } from './wealth-summary';
import { WeeklyWealth } from './weekly-wealth';

export interface Wealth {
  wealthSummary: WealthSummary;
  weeklyWealths: WeeklyWealth[];
}
