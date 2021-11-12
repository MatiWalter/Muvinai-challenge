export interface IMember {
  activePlan: TActivePlan;
  avatar: string;
  birthday: Date;
  dni: string;
  email: string;
  id: string;
  lastName: string;
  name: string;
  nextPayment: Date;
  phone: string;
  registerDate: Date;
  state: 'Activo' | 'No activo';
  subscription: Date;
}

export type TActivePlan =
  | 'Plan Elite Mensual'
  | 'Plan Basico Mensual'
