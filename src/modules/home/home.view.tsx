import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import HeaderView from '../header/header.view';
import { Container, Row } from 'react-bootstrap';
import AddBudgetComponent from './add-budget/add-budget.component';
import { createBudget, getBudgets, dropBudget } from '../../core/actions/budget.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { BudgetModel } from '../../core/models/budget.model';
import ListBudgetComponent from './list-budget/list-budget.component';
import { alertQuestion } from '../../shared/swal/swal.shared';

interface Props { 
  userData: UserDataModel;
  budgets: Array<BudgetModel>;
  getBudgets: Function;
  createBudget: Function;
  dropBudget: Function;
}

interface State { }

class HomeView extends Component<Props, State> {
  
  componentDidMount() {
    const { userData, getBudgets } = this.props;
    getBudgets(userData.uid);
  }
  
  private dropBudget(budgetId: string): void {
    const { userData, dropBudget } = this.props;
    alertQuestion(
      'question', 
      'Eliminar presupuesto', 
      '¿Estas serguro que deseas eliminar el presupuesto?', 
      () => {
        dropBudget(userData.uid , budgetId);
      }
    );
  }

  render() {
    const { userData, createBudget, budgets } = this.props;

    return (
      <>
        <HeaderView />
        
        <Container>
          <Row className="justify-content-md-center">
            <AddBudgetComponent 
              submitActions={ (formData: BudgetModel) => { createBudget(userData.uid, formData) } }
            />

            <ListBudgetComponent 
              budgets={ budgets }
              onDrop={ (budgetId: string) => this.dropBudget(budgetId) }
            />
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({ 
  userData: state.userData,
  budgets: state.budgets
});

const mapDispatchToProps = (dispatch: Function) => ({
  getBudgets: (uid: string) => dispatch(getBudgets(uid)),
  createBudget: (uid: string, data: BudgetModel) => dispatch(createBudget(uid, data)),
  dropBudget: (uid: string, budgetId: string) => dispatch(dropBudget(uid, budgetId))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);