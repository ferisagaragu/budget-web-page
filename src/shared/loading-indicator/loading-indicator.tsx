import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoadingIndicatorComponent = () => {
  return (
    <Row className="justify-content-md-center mb-3 mt-4">
      <Col md={ 1 }>
        <FontAwesomeIcon className="spinner" icon="spinner" size="2x" color="#17a2b8" spin/>
      </Col>
    </Row>
  );
}