import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin } from '../core/reducers/user-data.reducers';
import { budgets } from '../core/reducers/budget.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  budgets
});

export const initState = {
  userData: null,
  statusLogin: false,
  budgets: null
};