import React, { Component } from 'react';
import { Table, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalComponent } from '../../../shared/modal/modal.component';
import FormElementTableComponent from '../form-element-table/form-element-table.component';
import './table-budget.css';

interface Props { }

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
    const { showModal } = this.state;

    return (
      <>
        <ModalComponent 
          title="Nuevo elemento a presupuestar" 
          modalShow={ showModal } 
          onHide={ () => this.setState({ showModal: !showModal }) } 
          body={
            <FormElementTableComponent 
              submitActions={ (data: any) => console.log(data) }
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

        <Table className="mb-5" responsive>
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
            <tr className="text-center"> 
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
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
          </tbody>
        </Table>
      </>
    );
  }
}

export default TableBudgetComponent;