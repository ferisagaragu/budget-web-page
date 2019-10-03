import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';
import { BudgetModel } from '../../core/models/budget.model';

interface Props { 
  selectedBudget: BudgetModel;
}

interface State { }

class BudgetView extends Component<Props, State> {
  render() {
    const { selectedBudget } = this.props;

    return (
      <>
        <FromBudgetComponent
          initialValues={ selectedBudget }
          handleSubmit={ (data: any) => console.log(data) }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  selectedBudget: state.selectedBudget
});

const mapDispatchToProps = (dispatch: Function) => ({
  //getExamepleGlobalAction: (exampleParam: any) => dispatch(getExamepleGlobalAction(exampleParam))
});

export default connect(mapStateToProps,mapDispatchToProps)(BudgetView);