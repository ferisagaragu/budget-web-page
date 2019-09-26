import PetitionService from "./petition";
import { UserDataModel } from "../models/user-data.model";
import Cookies from 'js-cookie';
import Firebase from '../../shared/firebase/firebase.shared';

class UserService {

  private petition: PetitionService;
  private baseUrl: string;
  private firebase: Firebase;

  constructor() {
    this.petition = new PetitionService();
    this.baseUrl = this.petition.baseUrl;
    this.firebase = new Firebase();
  }

  public login(email: string, password: string, onSuccess: Function, onError: Function): void {
    this.firebase.signInWithEmailAndPassword(email, password, (userData: any) => {
      const userDataFinal = new UserDataModel({
        uid: userData.uid,
        email: userData.email,
        name: userData.displayName,
        photo: userData.photoURL
      });

      onSuccess(userDataFinal);
    }, (errorCode: any) => {
      let error = 'Hubo un error al iniciar sesión.';
      
      switch (errorCode) {
        case 'auth/user-not-found':
          error = 'El usuario ingresado no esta registrado.'
        break;

        case 'auth/wrong-password': 
          error = 'El usuario o contraseña ingresados son incorrectos.'
        break;
      }

      onError(error);
    });
  }

  public registerUser(userData: any, onSuccess: Function, onError: Function): void {
    const petitionData = {
      email: userData.email,
      password: userData.password,
      name: userData.name,
      photo: !userData.img ? 
        'https://scontent.cdninstagram.com/vp/' +
        '768d366914c0a79eadae628a8b67bb52/5DC16' +
        '3AF/t51.2885-15/e35/c0.134.1080.1080/s4' + 
        '80x480/66326556_2390444491197591_3495239' + 
        '699137757033_n.jpg?_nc_ht=scontent-sea1-1' +
        '.cdninstagram.com'
      : userData.img
    }

    this.petition.post(`${this.baseUrl}/registerUser`, petitionData,
      (resp: any) => {
        localStorage.setItem('token', resp.data.token);
        onSuccess(new UserDataModel(resp.data.userData), resp.message);
        Cookies.set('userData',{ email: petitionData.email, password: petitionData.password });
      }, (error: any) => {
        onError(error);
      }
    );
  }

  public removeNotification(id: string, idNotify: string, onSuccess: Function, onError: Function): void {
    this.petition.delete(`${this.baseUrl}/deleteNotification?id=${id}&notifyId=${idNotify}`, 
      (resp: any) => {
        onSuccess(resp);
      }, (error: any) => {
        onError(error);
      }
    );
  }

  public createNotification(notificationData: any, onSuccess: Function, onError: Function): void {
    this.petition.post(`${this.baseUrl}/createNotification`, notificationData,
      (resp: any) => {
        onSuccess(resp);
      }, (error: any) => {
        onError(error);
      }
    );
  }

}

export default UserService;