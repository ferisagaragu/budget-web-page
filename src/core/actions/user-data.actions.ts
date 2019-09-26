import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';
import UserService from '../http/user.service';
import { UserDataModel } from '../models/user-data.model';
import { alert, toast } from '../../shared/swal/swal.shared';

const userService = new UserService();

export function setUserData(payload: any): Action {
  if(!payload) {
    toast('info', 'Cerraste sesión cerrada');
  }
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}

export function setLoginStatus(payload: any): Action {
  return { type: UserDataReducerEnum.SET_STATUS_LOGIN, payload };
}

export function login(email:string, password: string): Function {
  return async (dispatch: Function) => {
    dispatch(setLoginStatus(true));
    userService.login(email, password, 
      (userData: UserDataModel) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(userData));
        toast('success', `Bienvenid@ ${userData.name}`);
      }, (errorMessage: any) => {
        dispatch(setLoginStatus(false));
        alert('error', 'Upps...', errorMessage);
      }
    );
  }
}

export function registerUser(userRegist: any) {
  return async (dispatch: Function) => {
    dispatch(setLoginStatus(true));
    userService.registerUser(userRegist,
      (userData: UserDataModel, message: string) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(userData));
        alert('success', 'Genial!!', message);
      }, (error: any) => {
        dispatch(setLoginStatus(false));
        alert('error', 'Upps...', error.message);
      }
    );
  }
}