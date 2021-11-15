import { randomDate } from './payments';

export const coupons = [
  { id: 1, code: 'OSDE', discount: '20%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 2, code: 'OSDE', discount: '50%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 3, code: 'OSDE', discount: '20%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 4, code: 'OSDE', discount: '33%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 5, code: 'OSDE', discount: '5%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 6, code: 'OSDE', discount: '25%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 7, code: 'OSDE', discount: '20%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
  { id: 8, code: 'OSDE', discount: '15%', applied: randomDate(new Date(2021,0,1), new Date()), expiration: randomDate(new Date(2021,0,1), new Date()) },
];
