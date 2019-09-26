export class UserDataModel {

  uid: string;
  email: string;
  name: string;
  photo: string;

  constructor(data: any | UserDataModel) {
    this.uid = '';
    this.email = '';
    this.name = '';
    this.photo = '';

    Object.assign(this, data);
  }
}