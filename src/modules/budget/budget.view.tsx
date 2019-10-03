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
  
  constructor(props: Props) {
    super(props);
    const { selectedBudget, history } = this.props;

    if (!selectedBudget) {
      history.push('/home');
    }
  }

  render() {
    const { selectedBudget, history } = this.props;

    return (
      <Container>
        {
          selectedBudget ? 
            <FromBudgetComponent
              initialValues={ selectedBudget }
              submitActions={ (data: any) => console.log(data) }
              cancel={ () => history.push('/home') }
            />
          :
            <div>No hay un presupuesto seleccionado.</div>
        }
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