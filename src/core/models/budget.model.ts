import { BudgetTableModel } from "./budget-table.model";

export class BudgetModel {

  uid: string;
  name: string;
  date: string;
  dateEnd: string;
  for: string;
  company: string;
  phoneNumber: string;
  address: string;
  budgetTable: Array<BudgetTableModel>;

  constructor(data: any | BudgetModel) {
    this.uid = '';
    this.name = '';
    this.date = '';
    this.dateEnd = '';
    this.for = '';
    this.company = '';
    this.phoneNumber = '';
    this.address = '';
    this.budgetTable = [];

    Object.assign(this, data);
  }
}