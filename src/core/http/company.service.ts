import Firebase from "../../shared/firebase/firebase.shared";
import { CompanyModel } from "../models/company.model";

class CompanyService {

  private firebase: Firebase;

  constructor() {
    this.firebase = new Firebase();
  }

  public createCompany(uid: string, data: any, onError: Function): void {
    this.firebase.push(`company/${uid}`, data, 
      (error: any) => {
        onError(error);
      }
    );
  }

  public getCompany(uid: string, onSuccess: Function): void {
    this.firebase.on(`company/${uid}`, (snapshot: any) => {
      const obj = snapshot.val();
      const out: Array<CompanyModel> = [];

      if (obj) {
        for( let prop in obj ) {
          out.push(new CompanyModel({
            label: obj[prop].label,
            value: { uid: prop }
          }));
        }
      }

      onSuccess(out);
    });
  }

  public removeCompany(uid: string, companyId: string, onError: Function): void {
    this.firebase.remove(`company/${uid}/${companyId}`,
      (error: any) => {
        onError(error);
      }
    );
  }

  public updateCompany(uid: string, companyId: string, data: any, onError: Function): void {
    this.firebase.update(`company/${uid}/${companyId}`, data,
      () => { }, (error: any) => {
        onError(error);
      }
    );
  }

}

export default CompanyService;