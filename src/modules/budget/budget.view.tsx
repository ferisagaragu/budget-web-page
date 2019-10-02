import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';

interface Props { }

interface State { }

class BudgetView extends Component<Props, State> {
  render() {
    return (
      <>
        <FromBudgetComponent 
          handleSubmit={ () => {} }
        />
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

export default connect(mapStateToProps,mapDispatchToProps)(BudgetView);