import React, { Component } from 'react';
import { Table, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalComponent } from '../../../shared/modal/modal.component';
import FormElementTableComponent from '../form-element-table/form-element-table.component';
import { BudgetTableModel } from '../../../core/models/budget-table.model';
import key from '../../../shared/key/react-elements.key';
import './table-budget.css';

interface Props { 
  dataTable: Array<BudgetTableModel>;
}

interface State { 
  showModal: boolean;
}

class TableBudgetComponent extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  private addTableElement(data: BudgetTableModel): void {
    let { dataTable } = this.props;
    const { showModal } = this.state;
    const { description, unitPrice, pice } = data;
    
    if (!dataTable) {
      dataTable = [];
    }

    dataTable.push(new BudgetTableModel({
      description,
      unitPrice: `${unitPrice} MNX`,
      pice: `${pice} pza`,
      total: `${+unitPrice * +pice} MNX`
    }));

    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    const { dataTable } = this.props;

    return (
      <>
        <ModalComponent 
          title="Nuevo elemento a presupuestar" 
          modalShow={ showModal } 
          onHide={ () => this.setState({ showModal: !showModal }) } 
          body={
            <FormElementTableComponent 
              submitActions={ (data: any) => this.addTableElement(data) }
              cancel={ () => this.setState({ showModal: !showModal }) }
            />
          } 
          size="xl"
        />

        <Col className="text-right mt-5 mb-3" >
          <Button 
            className="btn btn-circle btn-lg mr-3" 
            variant="outline-success"
            onClick={ () => this.setState({ showModal: true }) }
          >
            <FontAwesomeIcon icon="plus" />
          </Button>
        </Col>

        <Table responsive>
          <thead>
            <tr className="text-center">
              <th>Descripción</th>
              <th>Precio unitario</th>
              <th>Numero de piezas</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {
              dataTable &&
                dataTable.map((data: BudgetTableModel) => (
                  <tr 
                    className="text-center"
                    key={ key() }
                  > 
                    <td>
                      { data.description }
                    </td>
                    
                    <td>
                      { data.unitPrice }
                    </td>

                    <td>
                      { data.pice }
                    </td>

                    <td>
                      { data.total }
                    </td>

                    <td>
                      <Button 
                        className="btn btn-circle btn-lg mr-3" 
                        variant="outline-info"
                        onClick={ () => {} }
                      >
                        <FontAwesomeIcon icon="edit" />
                      </Button>

                      <Button 
                        className="btn btn-circle btn-lg" 
                        variant="outline-danger"
                        onClick={ () => {} }
                      >
                        <FontAwesomeIcon icon="trash" />
                      </Button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
        
        {
          dataTable &&
            dataTable.length === 0 &&
              <div className="text-center mb-5 no-results" >
                No hay informacion en el presupuesto.
              </div>
        }

        {
          !dataTable &&
            <div className="text-center mb-5 no-results" >
              No hay informacion en el presupuesto.
            </div>
        }
      </>
    );
  }
}

export default TableBudgetComponent;