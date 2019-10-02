import { Action } from '../interfaces/action.interface';
import { BudgetReducerEnum } from '../enums/budget-reducer.enum';

export const selectedbudget = (state = {}, action: Action) => {
  switch(action.type) {
    case BudgetReducerEnum.SET_SELECTED_BUDGET: return action.payload;
    default: return state;
  }
}