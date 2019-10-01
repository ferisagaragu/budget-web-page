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
        console.log(userData);
        toast('success', `Bienvenid@ ${userData.email}`);
      }, (errorMessage: any) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(null));
        alert('error', 'Upps...', errorMessage);
      }
    );
  }
}

export function logout(name:string): Function {
  return async (dispatch: Function) => {
    dispatch(setUserData(null));
    toast('info', `Hasta pronto ${name}`);
  }
}

export function registerUser(userRegist: any) {
  return async (dispatch: Function) => {
    dispatch(setLoginStatus(true));
    userService.registerUser(userRegist,
      (userData: UserDataModel) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(userData));
        alert('success', 'Genial!!', `El usuario fue registrado con el correo: ${userData.email}`);
      }, (error: any) => {
        dispatch(setLoginStatus(false));
        dispatch(setUserData(null));
        alert('error', 'Upps...', error);
      }
    );
  }
}

export function recoverPassword(email: string) {
  return async (dispatch: Function) => { 
    userService.recoverPassword(email, (sendMail: string) => {
      alert('success', 'Genial!!', `Se envio un correo a: ${sendMail} para recuperar la contraseña`);
    }, (error: any) => {
      alert('error', 'Upps...', error);
    });
  }
}