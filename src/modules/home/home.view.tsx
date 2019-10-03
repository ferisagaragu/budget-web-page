import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import { Container, Row } from 'react-bootstrap';
import AddBudgetComponent from './add-budget/add-budget.component';
import { createBudget, getBudgets, dropBudget, setSelectedBudget } from '../../core/actions/budget.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { BudgetModel } from '../../core/models/budget.model';
import ListBudgetComponent from './list-budget/list-budget.component';
import { alertQuestion } from '../../shared/swal/swal.shared';
import { LoadingIndicatorComponent } from '../../shared/loading-indicator/loading-indicator';

interface Props { 
  userData: UserDataModel;
  budgets: Array<BudgetModel>;
  getBudgets: Function;
  createBudget: Function;
  dropBudget: Function;
  setSelectedBudget: Function;
  history: any;
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
    const { userData, createBudget, budgets, setSelectedBudget, history } = this.props;

    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <AddBudgetComponent 
              submitActions={ (formData: BudgetModel) => { createBudget(userData.uid, formData) } }
            />

            {
              budgets ? 
                <ListBudgetComponent 
                  budgets={ budgets }
                  onDrop={ (budgetId: string) => this.dropBudget(budgetId) }
                  onView={ (selectedBudget: BudgetModel) => { setSelectedBudget(selectedBudget); history.push('/budget') } }
                />
              :
                <LoadingIndicatorComponent />
            }
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
  dropBudget: (uid: string, budgetId: string) => dispatch(dropBudget(uid, budgetId)),
  setSelectedBudget: (selectedbudget: BudgetModel) => dispatch(setSelectedBudget(selectedbudget))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);