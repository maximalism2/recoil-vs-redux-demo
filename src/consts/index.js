import add from 'date-fns/add'

export const EBetStatus = {
  Active: '__active__',
  Suspended: '__suspended__'
}

export const START_DATE_FORMAT = 'dd MMM yyyy';
export const INPUT_DATE_FORMAT = 'yyyy-MM-dd';

const tomorrow = add(new Date(), {days: 1});
const inThreeDays = add(new Date(), {days: 3});

export const bets = [
  {id: 1, title: 'My bet 1', status: EBetStatus.Active, startDate: new Date()},
  {id: 2, title: 'My bet 2', status: EBetStatus.Suspended, startDate: tomorrow},
  {id: 3, title: 'My bet 3', status: EBetStatus.Suspended, startDate: inThreeDays},
]
