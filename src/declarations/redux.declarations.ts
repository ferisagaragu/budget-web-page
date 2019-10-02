import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';
import { userData, statusLogin } from '../core/reducers/user-data.reducers';
import { budgets } from '../core/reducers/budget.reducers';
import { UserDataModel } from '../core/models/user-data.model';
import { BudgetModel } from '../core/models/budget.model';
import { BudgetTableModel } from '../core/models/budget-table.model';
import { selectedbudget } from '../core/reducers/selectedbudget.reducers';

export const reducers = combineReducers({
  form: reducerForm,
  userData,
  statusLogin,
  budgets,
  selectedbudget
});

export const initState = {
  /*userData: new UserDataModel({
    email: 'ferisagaragu@hotmail.com',
    name: 'Fernando Isaías García Aguirre',
    photo: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/0/04/BotW_Chickaloo_Tree_Nut_Icon.png/40px-BotW_Chickaloo_Tree_Nut_Icon.png?version=81a8fde1800ee4a8e81cf618e69eeb31',
    uid: 'q9axn6gCHYS1O6x66pJl8H0mbvx1'
  }),*/
  userData: null,
  statusLogin: false,
  budgets: null,
  selectedbudget: new BudgetModel({
    uid: '',
    name: '',
    date: '02 - septiembre - 2019',
    dateEnd: '02 - septiembre - 2019',
    for: 'Fernando Garcia Godina',
    company: 'FerGarGod',
    phoneNumber: '33 23 81 47 52',
    address: 'Valle de las flores 107',
    budgetTable: [
      new BudgetTableModel({
        description: 'Remplazo de cableado y rectificación de cableado',
        unitPrice: '100 MNX',
        pice: '12 pzas',
        total: '12, 000 MNX'
      }),
      new BudgetTableModel({
        description: 'Remplazo de contactos y apagadores',
        unitPrice: '100 MNX',
        pice: '12 pzas',
        total: '12, 000 MNX' 
      }),
      new BudgetTableModel({
        description: 'Adecuación de líneas de alimentación, iluminación y contactos',
        unitPrice: '3800 MNX',
        pice: '1 pzas',
        total: '3800 MNX'
      }) 
    ]
  })
};