import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './item-company.css';

interface Props { 
  label: string;
  onDrop: Function;
  onEdit: Function;
}

interface State { }

class ItemCompanyComponent extends Component<Props, State> {
  render() {
    const { label, onDrop, onEdit } = this.props;

    return (
      <Row className="item-list">
        <Col className="text-left" md={ 10 }>
          { label }
        </Col>
        
        <Col className="text-right" md={ 2 }>
          <Button
            className="btn btn-circle btn-lg mr-3"
            variant="outline-info"
            onClick={ () => onEdit() }
          >
            <FontAwesomeIcon icon="edit" />
          </Button>
          
          <Button
            className="btn btn-circle btn-lg"
            variant="outline-danger"
            onClick={ () => onDrop() }
          >
            <FontAwesomeIcon icon="trash" />
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ItemCompanyComponent;