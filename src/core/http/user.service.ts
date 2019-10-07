import { UserDataModel } from "../models/user-data.model";
import Cookies from 'js-cookie';
import Firebase from '../../shared/firebase/firebase.shared';

class UserService {

  private firebase: Firebase;

  constructor() {
    this.firebase = new Firebase();
  }

  public login(email: string, password: string, onSuccess: Function, onError: Function): void {
    this.firebase.signInWithEmailAndPassword(email, password, (userData: any) => {
      if (userData.uid) {
        this.firebase.once(`users/${userData.uid}`, (snapshot: any) => {
          const { uid, email, name, photo } = snapshot.val();

          const userDataFinal = new UserDataModel({
            uid,
            email,
            name,
            photo
          });

          Cookies.set('userData', JSON.stringify({ email, password }));
          onSuccess(userDataFinal);
        });      
      }
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

  public recoverPassword(email: string, onSendMail: Function, onError: Function) {
    this.firebase.sendPasswordResetEmail(email, () => {
      onSendMail(email);
    }, (error: any) => {
      if (error.toString().includes('There is no user record corresponding to this identifier')) {
        onError('El usuario a recuperar no esta registrado.');
      } else {
        onError(error);
      }
    });
  }

  public registerUser(userData: any, onSuccess: Function, onError: Function): void {  
    this.firebase.createUserWithEmailAndPassword(userData.email, userData.password, (user: any) => {
      const userDataFinal = new UserDataModel({
        uid: user.uid,
        email: userData.email,
        name: userData.name,
        photo: userData.img
      });
      
      this.firebase.update(`users/${user.uid}`, userDataFinal);
      Cookies.set('userData', JSON.stringify({ email: userData.email, password: userData.password }));
      onSuccess(userDataFinal);
    }, (errorCode: any, errorMessage: any) => {
      if (errorMessage === 'The email address is already in use by another account.') {
        onError('La dirección de correo electrónico ya está en uso por otra cuenta.');
      } else {
        onError(errorMessage);
      }
    });
  }

}

export default UserService;