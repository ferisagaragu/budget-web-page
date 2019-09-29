import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './add-budget.css';
import { ModalComponent } from '../../../shared/modal/modal.component';
import FormCreateBudgetComponent from '../form-create-budget/form-create-budget.component';

interface Props { }

interface State { 
  showModal: boolean;
}

class AddBudgetComponent extends Component<Props, State> {
  
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
          title="Nuevo presupuesto"
          modalShow={ showModal }
          body={ 
            <FormCreateBudgetComponent 
              handleSubmit={ () => {} }
            /> 
          }
          onHide={ () => this.setState({ showModal: !showModal }) }
          size="xl"
        />

        <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
          <Card className="card-add">
            <Card.Body>
              <Card.Title>
                Nuevo presupuesto
              </Card.Title>

              <Card.Subtitle 
                className="mb-2 text-muted"
              >
                Crea un nuevo presupuesto
              </Card.Subtitle>

              <Card.Text className="text-center mt-5">
                <Button 
                  variant="outline-success"
                  className="btn btn-circle btn-xl"
                  onClick={ () => this.setState({ showModal: true }) }
                >
                    <FontAwesomeIcon icon="calculator" />
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default AddBudgetComponent;