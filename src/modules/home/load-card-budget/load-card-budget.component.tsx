import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { LoadingIndicatorComponent } from '../../../shared/loading-indicator/loading-indicator';
import './load-card-budget.css';

interface Props { }

interface State { }

class LoadCardBudgetComponent extends Component<Props, State> {
  render() {
    return (
      <Col className="ml-3 mr-3 mt-3 mb-3" md={ 3 }>
        <Card className="card-load">
          <Card.Header className="card-header-load" />
          <Card.Body>
            <Card.Title>Cargando</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">presupuestos...</Card.Subtitle>
            <LoadingIndicatorComponent />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default LoadCardBudgetComponent;