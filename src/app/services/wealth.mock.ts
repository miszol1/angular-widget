import { WeeklyWealth } from '../models/weekly-wealth';

const wealthSummary = {
  inbound: { value: 1167000, count: 8 },
  outbound: { value: -2325000, count: 12 },
};

const weeklyWealths: WeeklyWealth[] = [
  {
    startDate: new Date('2021-05-30'),
    endDate: new Date('2021-06-06'),
    wealths: [1, 2, -3, -5, -4, 0, 0],
  },
  {
    startDate: new Date('2021-06-07'),
    endDate: new Date('2021-06-13'),
    wealths: [1, 2, -3, 2, 5, 0, 0],
  },
  {
    startDate: new Date('2021-06-14'),
    endDate: new Date('2021-06-20'),
    wealths: [1, 2, -3, 2, -3, 0, 0],
    warningIndex: 6,
  },
  {
    startDate: new Date('2021-06-21'),
    endDate: new Date('2021-06-27'),
    wealths: [1, 2, -3, 2, 5, 0, 0],
  },
];

export const wealthMock = {
  wealthSummary,
  weeklyWealths,
};
