import React, { Component } from 'react';
import { connect } from '../imports/react-redux.import';
import LoginView from './login/login.view';

interface Props { }

interface State { }

class App extends Component<Props, State> {
  render() {
    return (
      <LoginView />
    );
  }
}

const mapStateToProps = (state: any) => ({
  //examepleGlobalState: state.examepleGlobalState
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);