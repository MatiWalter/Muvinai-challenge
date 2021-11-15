import { IMember } from '~/Member';

export const member: IMember = {
  activePlan: 'Plan Elite Mensual',
  birthday: new Date(),
  dni: Math.floor(Math.random() * 100000000).toFixed(),
  email: 'michael.lawson@reqres.in',
  id: Math.floor(Math.random() * 100000).toFixed(),
  lastName: 'Lawson',
  name: 'Michael',
  nextPayment: new Date(),
  phone: Math.floor(Math.random() * 10000000000).toFixed(),
  registerDate: new Date(),
  state: 'Activo',
  subscription: new Date(),
  avatar: 'https://reqres.in/img/faces/7-image.jpg'
};
