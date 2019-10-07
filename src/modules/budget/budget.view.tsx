import React, { Component } from 'react';
import { connect } from '../../imports/react-redux.import';
import FromBudgetComponent from './from-budget/from-budget.component';
import { BudgetModel } from '../../core/models/budget.model';
import { Container } from 'react-bootstrap';
import { updateBudget, setSelectedBudget } from '../../core/actions/budget.actions';
import { UserDataModel } from '../../core/models/user-data.model';
import { alertQuestion, alert } from '../../shared/swal/swal.shared';
import { ModalComponent } from '../../shared/modal/modal.component';
import FormElementTableComponent from './form-element-table/form-element-table.component';
import { BudgetTableModel } from '../../core/models/budget-table.model';
import PdfView from '../pdf/pdf.view';

interface Props { 
  userData: UserDataModel;
  selectedBudget: BudgetModel;
  updateBudget: Function;
  history: any;
}

interface State { 
  showModal: boolean;
  showModalPdf: boolean;
  editBudgetTable: BudgetTableModel;
  renderSelectedBudget: BudgetModel;
  mode: boolean;
}

class BudgetView extends Component<Props, State> {
  
  loadExel: boolean = false;

  constructor(props: Props) {
    super(props);
    let { selectedBudget, history } = this.props;

    this.state = {
      showModal: false,
      showModalPdf: false,
      editBudgetTable: new BudgetTableModel({}),
      renderSelectedBudget: selectedBudget,
      mode: true
    }

    if (!selectedBudget) {
      history.push('/home');
      selectedBudget = new BudgetModel({});
    }

    if (!selectedBudget.budgetTable) {
      selectedBudget.budgetTable = [];
    }
  }

  private setMode(data: BudgetTableModel): void {
    const { mode } = this.state;

    if (data.description) {
      if (mode) {
        this.addTableElement(data);
      } else {
        this.editTableElement(data);
      }
    }
  }

  private onCancel(): void {
    const { history } = this.props;
    alertQuestion(
      'question', 
      'Regresar', 
      '¿Estas seguro que deceas a la pantalla principal?', 
      () => {
        history.push('/home');
      }
    );
  }

  private addTableElement(data: BudgetTableModel): void {
    const { selectedBudget } = this.props;
    const { showModal } = this.state;
    const { uid, description, unitPrice, pice } = data;
    let total: number = 0;

    selectedBudget.budgetTable.push(new BudgetTableModel({
      uid,
      description,
      unitPrice: `${unitPrice} MNX`,
      pice: `${pice} pza`,
      total: `${+unitPrice * +pice} MNX`
    }));

    selectedBudget.budgetTable.forEach((element: BudgetTableModel) => {
      total += +element.total.replace(' MNX','');
    });
    selectedBudget.total = `${total}`;

    this.setState({ showModal: !showModal, renderSelectedBudget: selectedBudget });
  }

  private editTableElement(data: BudgetTableModel): void {
    const { selectedBudget } = this.props;
    const { showModal } = this.state;
    let selected: number = -1;
    let total: number = 0;

    selectedBudget.budgetTable.forEach((element: BudgetTableModel, index: number) => {
      if (element.uid === data.uid) {
        selected = index;
      }
    });

    if (selected !== -1) {
      const { uid, description, unitPrice, pice } = data;
      selectedBudget.budgetTable[selected] = new BudgetTableModel({
        uid,
        description,
        unitPrice: `${unitPrice} MNX`,
        pice: `${pice} pza`,
        total: `${+unitPrice * +pice} MNX`
      });
    }

    selectedBudget.budgetTable.forEach((element: BudgetTableModel) => {
      total += +element.total.replace(' MNX','');
    });
    selectedBudget.total = `${total}`;

    this.setState({ showModal: !showModal, renderSelectedBudget: selectedBudget });
  }

  private onEditTable(data: BudgetTableModel): void {
    const { uid, description, unitPrice, pice } = data;

    this.setState({ 
      showModal: true,
      mode: false,
      editBudgetTable: new BudgetTableModel({
        uid,
        description,
        unitPrice: unitPrice.replace(' MNX',''),
        pice: pice.replace(' pza','')
      })
    });
  }

  private onDropTable(index: number): void {
    const { selectedBudget } = this.props;

    alertQuestion(
      'question', 
      'Eliminar elemento del presupues', 
      '¿Estas seguro que deceas eliminar el elemento del presupues?', 
      () => {
        selectedBudget.budgetTable.forEach((data: BudgetTableModel, indexFor: number) => {
          if (index === indexFor) {
            selectedBudget.budgetTable.splice(indexFor, 1);
          }
        });
    
        this.setState({ renderSelectedBudget: selectedBudget });
      }
    );
  }

  private setExelDataTable(exelData: Array<BudgetTableModel>, error: string): void {
    if (error) {
      alert('error', 'Upps', 'Hubo un problema al cargar el .xlsx');
      return;
    }

    alertQuestion(
      'question', 
      'Cargar información del .xlsx', 
      '¿Estas seguro que deceas cargar la informacion del .xlsx? ' + 
      'Al aceptar todos los datos actuales seran remplazados por los que contenga el .xlsx', 
      () => {
        const { 
          uid,
          name,
          date,
          dateEnd,
          company,
          phoneNumber,
          address,
          term,
          workforce,
          total
        } = this.state.renderSelectedBudget;
        
        const data: BudgetModel = new BudgetModel({
          uid,
          name,
          date,
          dateEnd,
          for: this.state.renderSelectedBudget.for,
          company,
          phoneNumber,
          address,
          term,
          workforce,
          total,
          budgetTable: exelData
        });

        this.setState({ renderSelectedBudget: data });
        this.loadExel = true;
      }
    );
  }

  private updateBudget(data: BudgetModel): void {
    const { updateBudget, userData } = this.props;
    const { renderSelectedBudget } = this.state;

    if (this.loadExel) {
      data.budgetTable = renderSelectedBudget.budgetTable;
      updateBudget(userData.uid, data);
      this.loadExel = false;
    } else {
      updateBudget(userData.uid, data);
    }
  }

  render() {
    const { selectedBudget } = this.props;
    const { showModal, showModalPdf, editBudgetTable, renderSelectedBudget, mode } = this.state;

    return (
      <Container>
        <ModalComponent 
          title="Nuevo elemento a presupuestar" 
          modalShow={ showModal } 
          onHide={ () => this.setState({ showModal: !showModal }) } 
          body={
            <FormElementTableComponent
              initialValues={ editBudgetTable }
              submitActions={ (data: BudgetTableModel) => this.setMode(data) }
              cancel={ () => this.setState({ showModal: !showModal }) }
              mode={ mode }
            />
          } 
          size="xl"
        />

        <ModalComponent 
          title="Presupuesto" 
          modalShow={ showModalPdf } 
          onHide={ () => this.setState({ showModalPdf: !showModalPdf }) } 
          body={
            <PdfView viewer={ true } />
          } 
          size="xl"
        />

        {
          selectedBudget ? 
            <FromBudgetComponent
              initialValues={ renderSelectedBudget }
              submitActions={ (data: BudgetModel) => this.updateBudget(data) }
              cancel={ () => this.onCancel() }
              onAddTable={ () => this.setState({ showModal: true, mode: true, editBudgetTable: new BudgetTableModel({}) }) } 
              onEditTable={ (data: BudgetTableModel) =>  this.onEditTable(data) }
              onDrop={ (index: number) => this.onDropTable(index) }
              onPdf={ () => this.setState({ showModalPdf: true }) }
              onLoadFile={ (exelData: Array<BudgetTableModel>, error: string) => this.setExelDataTable(exelData, error) }
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
  updateBudget: (uid: string, data: BudgetModel) => dispatch(updateBudget(uid, data)),
  setSelectedBudget: (data: BudgetModel) => dispatch(setSelectedBudget(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(BudgetView);