import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';
import { BudgetModel } from '../../core/models/budget.model';
import { Container } from 'react-bootstrap';

interface Props { 
  selectedBudget: BudgetModel;
  history: any;
}

interface State { }

class BudgetView extends Component<Props, State> {
  render() {
    const { selectedBudget, history } = this.props;

    return (
      <Container>
        <FromBudgetComponent
          initialValues={ selectedBudget }
          submitActions={ (data: any) => console.log(data) }
          cancel={ () => history.push('/home') }
        />
      </Container>
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