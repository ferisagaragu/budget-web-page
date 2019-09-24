import firebase from '../../config/app.config';

class Firebase {

  //REGIST AND LOGIN WHIT EMAIL
  public createUserWithEmailAndPassword(email: string, password: string, onRegist: Function, onError?: Function | undefined): void {
    let errorCode: string = '';
    let errorMessage: string = '';

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;

      if (onError) {
        onError(errorCode, errorMessage);
      }
    }).then(() => {
      if (!errorCode) {
        firebase.auth().onAuthStateChanged((user: any) => {
          if (user) {
            onRegist(user);
          } else {
            onRegist(null);
          }

          firebase.auth().signOut().then(
            () => {}
          ).catch(
            (error) => {}
          );
        });
      }
    });
  }

  public signInWithEmailAndPassword(email: string, password: string, onLogIn: Function, onError?: Function | undefined): void {
    let errorCode: string = '';
    let errorMessage: string = '';
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;

      if (onError) {
        onError(errorCode, errorMessage);
      }
    }).then(() =>{
      if (!errorCode) {
        firebase.auth().onAuthStateChanged((user) => {
          if (!errorCode) {
            onLogIn(user);
          } 
        });
      }
    });
  }

  //REGIST AND LOGIN WHIT GEMAIL
  public signInWithGooglePopup(onSignIn: Function, onError?: Function | undefined): void {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result: any) => {
      const token = result.credential.accessToken;
      const user = result.user;
      onSignIn(token, user);
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (onError) {
        onError(errorCode, errorMessage);
      }
    });
  }

  public signOut(onSignOut: Function, onError?: Function | undefined): void {
    firebase.auth().signOut().then(() => {
      onSignOut();
    }).catch(function(error) {
      if (onError) {
        onError(error);
      }
    });
  }

  //CALL DATA
  public on(path: string, onFunction: Function): void {
    firebase.database().ref().child(path).on('value',(snapshot: any) => {
      onFunction(snapshot);
    });
  }

  public once(path: string, onFunction: Function): void {
    firebase.database().ref().child(path).once('value',(snapshot: any) => {
      onFunction(snapshot);
    });
  }

  public remove(path: string, errorFunction?: Function | undefined): void {
    firebase.database().ref().child(path).remove((error) => {
      if (errorFunction) {
        errorFunction(error);
      }
    });
  }

  public update(path: string, data: any, errorFunction?: Function | undefined): void {
    firebase.database().ref(path).update(data,(error) => {
      if (errorFunction) {
        errorFunction(error);
      }
    });
  }

  public set(path: string,data: any, errorFunction?: Function | undefined): void {
    firebase.database().ref(path).set(data,(error) => {
      if (errorFunction) {
        errorFunction(error);
      }
    });
  }

}

export default Firebase;