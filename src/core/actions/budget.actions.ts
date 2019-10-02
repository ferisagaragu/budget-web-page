import { Action } from '../interfaces/action.interface';
import BudgetService from '../http/budget.service';
import { alert } from '../../shared/swal/swal.shared';
import { BudgetReducerEnum } from '../enums/budget-reducer.enum';

const budgetService = new BudgetService();

export function setBudgets(payload: any): Action {
  return { type: BudgetReducerEnum.SET_BUDGETS, payload };
}

export function setSelectedBudget(payload: any): Action {
  return { type: BudgetReducerEnum.SET_SELECTED_BUDGET, payload };
}

export function getBudgets(uid: string): Function {
  return async (dispatch: Function) => {
    budgetService.getBudgets(uid,
      (value: any) => {
        dispatch(setBudgets(value));
      }
    );
  }
}

export function createBudget(uid: string, data: any): Function {
  return async (dispatch: Function) => {
    budgetService.createBudget(uid, data,
      (error: string) => {
        alert('error','Uppss', error);
      }
    );
  }
}

export function dropBudget(uid: string, budgetId: string): Function {
  return async (dispatch: Function) => {
    budgetService.dropBudget(uid, budgetId, 
      (error: string) => {
        alert('error','Uppss', error);
      }
    );
  }
}