import React, { Component } from 'react';
import { Table, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BudgetTableModel } from '../../../core/models/budget-table.model';
import key from '../../../shared/key/react-elements.key';
import readXlsxFile from '../../../imports/read-xlsx-file.import';
import './table-budget.css';

interface Props { 
  dataTable: Array<BudgetTableModel>;
  onAddTable: Function;
  onEditTable: Function;
  onDrop: Function;
  onLoadFile: Function;
}

interface State { 
  showModal: boolean;
}

const schema = {
  'Descripcion': {
    prop: 'description',
    type: String,
    required: true
  },
  'Precio unitario': {
    prop: 'unitPrice',
    type: Number,
    required: true
  },
  'Numero de piezas': {
    prop: 'pice',
    type: Number,
    required: true
  },
  'descripcion': {
    prop: 'description',
    type: String,
    required: true
  },
  'precio unitario': {
    prop: 'unitPrice',
    type: Number,
    required: true
  },
  'numero de piezas': {
    prop: 'pice',
    type: Number,
    required: true
  }
}

class TableBudgetComponent extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  private onReadExelFile(evt: any): void {
    const input = evt.target;
    const { onLoadFile } = this.props;
    const out: Array<BudgetTableModel> = [];
    let errorOut: string = '';
                
    readXlsxFile(input.files[0],{ schema }).then(({ rows, error }: any) => {
      if (error) {
        errorOut = error;
        return;
      }

      rows.forEach((element: any) => {
        const { description, pice, unitPrice } = element;

        out.push(new BudgetTableModel({
          description,
          pice: `${pice ? pice : 0} MNX`,
          unitPrice: `${unitPrice ? unitPrice : 0} pza`,
          total: ((pice ? pice : 0) * (unitPrice ? unitPrice : 0))
        }));
      });
    });
    
    input.value = input.defaultValue;
    onLoadFile(out, errorOut);
  }

  render() {
    const { dataTable, onAddTable, onEditTable, onDrop } = this.props;

    return (
      <>
        <Col className="text-right mt-5 mb-3" >
          <span className="btn btn-outline-success btn-circle btn-lg btn-file mr-3">
            <FontAwesomeIcon icon="file-excel" />

            <input 
              type="file" 
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
              onChange={ (evt: any) => this.onReadExelFile(evt) } 
            />
          </span>
          
          <Button 
            className="btn btn-circle btn-lg" 
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

                    <td className="actions-table">
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