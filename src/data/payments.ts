export const historyPayments = [
  {
    id: '5',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021,0,1), new Date()),
    completed: false
  },
  {
    id: '4',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021,0,1), new Date()),
    completed: false
  },
  {
    id: '3',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Mastercard',
    date: randomDate(new Date(2021,0,1), new Date()),
    completed: true
  },
  {
    id: '2',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Mastercard',
    date: randomDate(new Date(2021,0,1), new Date()),
    completed: false },
  {
    id: '1',
    amount: Math.floor(Math.random() * 10000).toFixed(),
    card: Math.floor(Math.random() * 10000).toFixed(),
    brand: 'Visa',
    date: randomDate(new Date(2021,0,1), new Date()),
    completed: true
  },
];

export function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
