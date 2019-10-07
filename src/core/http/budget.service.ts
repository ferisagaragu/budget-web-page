import Firebase from '../../shared/firebase/firebase.shared';
import { BudgetModel } from "../models/budget.model";
import { BudgetTableModel } from "../models/budget-table.model";
import key from "../../shared/key/react-elements.key";

class BudgetService {

  private firebase: Firebase;

  constructor() {
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
              address: obj[prop].address,
              term: obj[prop].term,
              workforce: obj[prop].workforce ? obj[prop].workforce : '0 MNX',
              total: obj[prop].total ? obj[prop].total : '0 MNX',
              budgetTable: obj[prop].budgetTable && 
                obj[prop].budgetTable.map((data: any) => new BudgetTableModel({
                  description: data.description,
                  unitPrice: data.unitPrice,
                  pice: data.pice,
                  total: data.total
                }))
            }));
          }
        }

        onSuccess(outData);
      }
    );
  }

  public createBudget(uid: string, data: any, onError: Function): void {
    data.name = `${data.name} - ${key()}`;
    this.firebase.push(`budgets/${uid}`, data,  
      (error: any) => {
        onError(error);
      }
    );
  }

  public updateBudget(uid: string, data: any,  onSuccess: Function, onError: Function): void {
    this.firebase.update(`budgets/${uid}/${data.uid}`, data,
      () => {
        onSuccess();
      }, 
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