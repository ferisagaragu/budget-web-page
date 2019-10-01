import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin } from '../core/reducers/user-data.reducers';
import { budgets } from '../core/reducers/budget.reducers';
import { UserDataModel } from '../core/models/user-data.model';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  budgets
});

export const initState = {
  userData: new UserDataModel({
    email: 'ferisagaragu@hotmail.com',
    name: 'Fernando Isaías García Aguirre',
    photo: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/0/04/BotW_Chickaloo_Tree_Nut_Icon.png/40px-BotW_Chickaloo_Tree_Nut_Icon.png?version=81a8fde1800ee4a8e81cf618e69eeb31',
    uid: 'q9axn6gCHYS1O6x66pJl8H0mbvx1'
  }),
  // userData: null,
  statusLogin: false,
  budgets: null
};