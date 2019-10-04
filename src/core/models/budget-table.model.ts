import key from "../../shared/key/react-elements.key";

export class BudgetTableModel {

  uid: string;
  description: string;
  unitPrice: string;
  pice: string;
  total: string;

  constructor(data: any | BudgetTableModel) {
    this.uid = key();
    this.description = '';
    this.unitPrice = '';
    this.pice = '';
    this.total = '';

    Object.assign(this, data);
  }
}