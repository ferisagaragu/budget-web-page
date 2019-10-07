import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import RenderTextField from '../../../shared/redux-form/redux-render-text-field.shared';
import { FormCreateCompanyReducerEnum } from '../../../core/enums/form-create-company-reducer.enum';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './form-create-company.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormCreateCompanyComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 11 }>
            <Field 
              className="form-control"
              name="company"
              component={ RenderTextField }
              label="Nombre de la compañia"
            />
          </Col>

          <Col md={ 1 }>
            <Button
              className="mr-3 aling-save btn btn-circle btn-lg"
              type="submit" 
              variant="outline-success"
              disabled={ submitting }
            >
              <FontAwesomeIcon icon="save" />
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    company: ''
  }
  
  if (!values.company) {
    errors.company = 'El nombre de la compañia es requerido';
  }

  return errors
}

export default reduxForm({
  form: FormCreateCompanyReducerEnum.FORM_CREATE_COMPANY_SUBMIT,
  validate
})(FormCreateCompanyComponent);