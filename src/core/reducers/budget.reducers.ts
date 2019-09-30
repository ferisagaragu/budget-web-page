import { Action } from '../interfaces/action.interface';
import { BudgetReducerEnum } from '../enums/budget-reducer.enum';

export const budgets = (state = {}, action: Action) => {
  switch(action.type) {
    case BudgetReducerEnum.SET_BUDGETS: return action.payload;
    default: return state;
  }
}