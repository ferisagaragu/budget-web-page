import { BudgetTableModel } from "./budget-table.model";

export class BudgetModel {

  uid: string;
  name: string;
  date: Date;
  dateEnd: Date;
  for: string;
  company: string;
  phoneNumber: string;
  address: string;
  budgetTable?: Array<BudgetTableModel>;

  constructor(data: any | BudgetModel) {
    this.uid = '';
    this.name = '';
    this.date = new Date();
    this.dateEnd = new Date();
    this.for = '';
    this.company = '';
    this.phoneNumber = '';
    this.address = '';
    this.budgetTable = [];

    Object.assign(this, data);
  }
}