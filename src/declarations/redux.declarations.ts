import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin } from '../core/reducers/user-data.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin
});

export const initState = {
  userData: null,
  statusLogin: false
};