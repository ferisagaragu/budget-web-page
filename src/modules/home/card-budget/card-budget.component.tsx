import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BudgetModel } from '../../../core/models/budget.model';
import './card-budget.css';
import { alertQuestion } from '../../../shared/swal/swal.shared';

interface Props { 
  budget: BudgetModel;
}

interface State { }

class CardBudgetComponent extends Component<Props, State> {
  render() {
    const { budget } = this.props;

    return (
      <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
        <Card className="card-budget">
          <Card.Header className="text-right">
            <Button 
              className="btn btn-circle btn-lg" 
              variant="outline-danger"
              onClick={ () => 
                alertQuestion(
                  'question', 
                  'Elminar presupuesto', 
                  '¿Estas seguro que deseas eliminar el presupuesto?',
                  () => {
                    console.log('Dio aceptar');
                  }
                ) 
              }
            >
              <FontAwesomeIcon icon="trash" />
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              { budget.name }
            </Card.Title>

            <Card.Subtitle 
              className="mb-2 text-muted"
            >
              Ver el presupuesto de { budget.date }
            </Card.Subtitle>

            <Card.Text className="text-center mt-4">
              <Button 
                variant="outline-info"
                className="btn btn-circle btn-xl">
                  <FontAwesomeIcon icon="file-invoice" />
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CardBudgetComponent;