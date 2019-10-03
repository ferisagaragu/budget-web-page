import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';
import { BudgetModel } from '../../core/models/budget.model';
import { Container } from 'react-bootstrap';
import { updateBudget } from '../../core/actions/budget.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { alertQuestion } from '../../shared/swal/swal.shared';

interface Props { 
  userData: UserDataModel;
  selectedBudget: BudgetModel;
  updateBudget: Function;
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

    if (!selectedBudget.budgetTable) {
      selectedBudget.budgetTable = [];
    }
  }

  private onCancel(): void {
    const { history } = this.props;
    alertQuestion(
      'question', 
      'Cancelar la operacion', 
      '¿Estas seguro que deceas cancelar la creacion del presupuesto?', 
      () => {
        history.push('/home');
      }
    );
  }

  render() {
    const { selectedBudget, updateBudget, userData } = this.props;

    return (
      <Container>
        {
          selectedBudget ? 
            <FromBudgetComponent
              initialValues={ selectedBudget }
              submitActions={ (data: BudgetModel) => updateBudget(userData.uid, data) }
              cancel={ () => this.onCancel() }
            />
          :
            <div>No hay un presupuesto seleccionado.</div>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  selectedBudget: state.selectedBudget
});

const mapDispatchToProps = (dispatch: Function) => ({
  updateBudget: (uid: string, data: BudgetModel) => dispatch(updateBudget(uid, data))
});

export default connect(mapStateToProps,mapDispatchToProps)(BudgetView);