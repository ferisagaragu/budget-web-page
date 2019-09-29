import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card-budget.css';

interface Props { }

interface State { }

class CardBudgetComponent extends Component<Props, State> {
  render() {
    return (
      <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
        <Card className="card-budget">
          <Card.Header className="text-right">
            <Button 
              className="btn btn-circle btn-lg" 
              variant="outline-danger"
            >
              <FontAwesomeIcon icon="trash" />
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Nuevo presupuesto
            </Card.Title>

            <Card.Subtitle 
              className="mb-2 text-muted"
            >
              Ver el presupuesto de 09/07/2019
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