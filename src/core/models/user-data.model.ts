export class UserDataModel {

  uid: string;
  email: string;
  name: string;
  photo: string;
  role: number;

  constructor(data: any | UserDataModel) {
    this.uid = '';
    this.email = '';
    this.name = '';
    this.photo = '';
    this.role = 0;

    Object.assign(this, data);
  }
}