import React, { Component } from 'react';
import { connect } from '../imports/react-redux.import';

interface Props { }

interface State { }

class App extends Component<Props, State> {
  render() {
    return (
      <>
        app is render
      </>
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