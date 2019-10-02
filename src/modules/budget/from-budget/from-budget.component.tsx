import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FromBudgetReducerEnum } from '../../../core/enums/from-budget-reducer.enum';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './from-budget.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FromBudgetComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        
        <Field 
          className="form-control"
          name="example"
          component={ renderTextField }
          label="example"
        />

        <Row className="text-right">
          <Col md={ 12 }>
            <Button 
              className="mr-3"
              variant="success"
              type="submit" 
              disabled={ submitting }
            > 
              <FontAwesomeIcon icon="save" />
              &nbsp;
              Guardar
            </Button>

            <Button 
              className="mr-3"
              variant="info"
            >
              <FontAwesomeIcon icon="file-pdf" />
              &nbsp;
              Ver en PDF
            </Button>

            <Button 
              variant="danger"
              onClick={ cancel }
            >
              <FontAwesomeIcon icon="times" />
              &nbsp;
              Cancelar
            </Button>
          </Col>
        </Row>  
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    example: ''
  }
  
  if (!values.example) {
    errors.example = 'example is requiered';
  }

  return errors
}

export default reduxForm({
  form: FromBudgetReducerEnum.FROM_BUDGET_SUBMIT,
  validate
})(FromBudgetComponent);