export class BudgetModel {

  uid: string;
  name: string;
  date: Date;
  dateEnd: Date;
  for: string;
  company: string;
  phoneNumber: string;
  address: string;

  constructor(data: any | BudgetModel) {
    this.uid = '';
    this.name = '';
    this.date = new Date();
    this.dateEnd = new Date();
    this.for = '';
    this.company = '';
    this.phoneNumber = '';
    this.address = '';

    Object.assign(this, data);
  }
}