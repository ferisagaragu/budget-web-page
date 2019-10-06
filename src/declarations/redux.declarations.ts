import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin } from '../core/reducers/user-data.reducers';
import { budgets, selectedBudget } from '../core/reducers/budget.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  budgets,
  selectedBudget
});

export const initState = {
  userData: null,
  statusLogin: false,
  budgets: null,
  selectedBudget: null
};