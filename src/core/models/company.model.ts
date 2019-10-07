export class CompanyModel {

  label: string;
  value: any;

  constructor(data: any | CompanyModel) {
    this.label = '';
    this.value = { };

    Object.assign(this, data);
  }
}