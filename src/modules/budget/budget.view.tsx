import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';
import { BudgetModel } from '../../core/models/budget.model';
import { Container } from 'react-bootstrap';
import { updateBudget } from '../../core/actions/budget.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { alertQuestion } from '../../shared/swal/swal.shared';
import { ModalComponent } from '../../shared/modal/modal.component';
import FormElementTableComponent from './form-element-table/form-element-table.component';
import { BudgetTableModel } from '../../core/models/budget-table.model';

interface Props { 
  userData: UserDataModel;
  selectedBudget: BudgetModel;
  updateBudget: Function;
  history: any;
}

interface State { 
  showModal: boolean;
}

class BudgetView extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    const { selectedBudget, history } = this.props;

    this.state = {
      showModal: false
    }

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

  private addTableElement(data: BudgetTableModel): void {
    const { selectedBudget } = this.props;
    const { showModal } = this.state;
    const { description, unitPrice, pice } = data;

    selectedBudget.budgetTable.push(new BudgetTableModel({
      description,
      unitPrice: `${unitPrice} MNX`,
      pice: `${pice} pza`,
      total: `${+unitPrice * +pice} MNX`
    }));

    this.setState({ showModal: !showModal });
  }

  render() {
    const { selectedBudget, updateBudget, userData } = this.props;
    const { showModal } = this.state;

    return (
      <Container>
        <ModalComponent 
          title="Nuevo elemento a presupuestar" 
          modalShow={ showModal } 
          onHide={ () => this.setState({ showModal: !showModal }) } 
          body={
            <FormElementTableComponent 
              submitActions={ (data: BudgetTableModel) => this.addTableElement(data) }
              cancel={ () => this.setState({ showModal: !showModal }) }
            />
          } 
          size="xl"
        />

        {
          selectedBudget ? 
            <FromBudgetComponent
              initialValues={ selectedBudget }
              submitActions={ (data: BudgetModel) => updateBudget(userData.uid, data) }
              cancel={ () => this.onCancel() }
              onAddTable={ () => this.setState({ showModal: true }) } 
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