import { Action } from '../interfaces/action.interface';
import { CompanyReducerEnum } from '../enums/company-reducer.enum';

export const company = (state = {}, action: Action) => {
  switch(action.type) {
    case CompanyReducerEnum.SET_COMPANY: return action.payload;
    default: return state;
  }
}