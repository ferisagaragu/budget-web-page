import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BudgetModel } from '../../../core/models/budget.model';
import './card-budget.css';

interface Props { 
  budget: BudgetModel;
  onDrop: Function;
}

interface State { }

class CardBudgetComponent extends Component<Props, State> {
  render() {
    const { budget, onDrop } = this.props;

    return (
      <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
        <Card className="card-budget">
          <Card.Header className="text-right">
            <Button 
              className="btn btn-circle btn-lg" 
              variant="outline-danger"
              onClick={ () => onDrop() }
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