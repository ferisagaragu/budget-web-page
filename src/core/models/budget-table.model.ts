export class BudgetTableModel {

  description: string;
  unitPrice: string;
  pice: string;
  total: string;

  constructor(data: any | BudgetTableModel) {
    this.description = '';
    this.unitPrice = '';
    this.pice = '';
    this.total = '';

    Object.assign(this, data);
  }
}