import React, { Component } from 'react';
import { connect } from '../imports/react-redux.import';
import LoginView from './login/login.view';
import { UserDataModel } from '../core/models/user-data.model';
import HomeView from './home/home.view';
import { login } from '../core/actions/user-data.actions';
import Cookies from 'js-cookie';

interface Props { 
  userData: UserDataModel;
  login: Function;
}

interface State { }

class App extends Component<Props, State> {

  componentDidMount() {
    const userData: any = Cookies.getJSON('userData');
    const { login } = this.props;

    if (userData) {
      login(userData.email, userData.password);
    }
  }

  render() {
    const { userData } = this.props;

    return (
      <>
        {
          userData ?
            <HomeView /> 
          :
            <LoginView /> 
        }
      </>
      
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({
  login: (user: string, password: string) => dispatch(login(user, password))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);