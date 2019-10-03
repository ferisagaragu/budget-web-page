import React, { Component } from 'react';
import { Table, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BudgetTableModel } from '../../../core/models/budget-table.model';
import key from '../../../shared/key/react-elements.key';
import './table-budget.css';

interface Props { 
  dataTable: Array<BudgetTableModel>;
  onAddTable: Function;
  onEditTable: Function;
  onDrop: Function;
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

  render() {
    const { dataTable, onAddTable, onEditTable, onDrop } = this.props;

    return (
      <>
        <Col className="text-right mt-5 mb-3" >
          <Button 
            className="btn btn-circle btn-lg mr-3" 
            variant="outline-success"
            onClick={ () => onAddTable() }
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
                dataTable.map((data: BudgetTableModel, index: number) => (
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
                        onClick={ () => onEditTable(data) }
                      >
                        <FontAwesomeIcon icon="edit" />
                      </Button>

                      <Button 
                        className="btn btn-circle btn-lg" 
                        variant="outline-danger"
                        onClick={ () => onDrop(index) }
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