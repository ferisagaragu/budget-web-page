import PetitionService from "./petition";
import Firebase from '../../shared/firebase/firebase.shared';
import { BudgetModel } from "../models/budget.model";

class BudgetService {

  private petition: PetitionService;
  private baseUrl: string;
  private firebase: Firebase;

  constructor() {
    this.petition = new PetitionService();
    this.baseUrl = this.petition.baseUrl;
    this.firebase = new Firebase();
  }

  public getBudgets(uid: string, onSuccess: Function): void {
    this.firebase.on(`budgets/${uid}`, 
      (snapshot: any) => {
        const obj = snapshot.val();
        const outData = [];

        if (obj) {
          for( let prop in obj ) {
            outData.push(new BudgetModel({
              uid: prop,
              name: obj[prop].name,
              date: obj[prop].date,
              dateEnd: obj[prop].dateEnd,
              for: obj[prop].for,
              company: obj[prop].company,
              phoneNumber: obj[prop].phoneNumber,
              address: obj[prop].address
            }));
          }
        }

        onSuccess(outData);
      }
    );
  }

  public createBudget(uid: string, data: any, onError: Function): void {
    this.firebase.push(`budgets/${uid}`, data,  
      (error: any) => {
        onError(error);
      }
    );
  }

  public dropBudget(uid: string, budgetId: string, onError: Function): void {
    this.firebase.remove(`budgets/${uid}/${budgetId}`, 
      (error: any) => {
        onError(error);
      }
    );
  }

}

export default BudgetService;