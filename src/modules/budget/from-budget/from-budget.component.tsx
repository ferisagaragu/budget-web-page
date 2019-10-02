import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FromBudgetReducerEnum } from '../../../core/enums/from-budget-reducer.enum';
import { Col, Row } from 'react-bootstrap';
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
            <button 
              type="submit" 
              disabled={ submitting }
            >
              Save
            </button>

            <button 
              onClick={ cancel }
            >
              Cancel
            </button>
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