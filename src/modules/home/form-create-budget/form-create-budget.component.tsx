import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { FormCreateBudgetReducerEnum } from '../../../core/enums/form-create-budget-reducer.enum';
import RenderDatePicker from '../../../shared/redux-form/redux-render-date-picker.shared';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderSingleSelect from '../../../shared/redux-form/redux-render-single-select.shared';
import GoogleSuggest from '../../../shared/redux-form/redux-render-google-suggest.shared';
import RenderTextField from '../../../shared/redux-form/redux-render-text-field.shared';
import RenderMaskField from '../../../shared/redux-form/redux-render-mask-field.shared';
import './form-create-budget.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormCreateBudgetComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions, initialValues } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="name"
              component={ RenderTextField }
              label="Nombre del presupuesto"
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="date"
              component={ RenderDatePicker }
              label="Fecha de creación"
              dateFormat="d - MMMM - yyyy"
              disabled="disabled"
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="dateEnd"
              label="Fecha de final"
              component={ RenderDatePicker }
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="for"
              component={ RenderTextField }
              label="Para"
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              name="company"
              component={ renderSingleSelect }
              label="Compañia"
              options={ [{ value: '1', label: 'FerGarGod' }, { value: '2', label: 'FerGarGod2' }] }
              noOptionsMessage="No se encontraron coincidencias"
              defaultValue={ initialValues.company }
            />
          </Col>

          <Col md={ 3 }>
          <Field 
              className="form-control"
              name="phoneNumber"
              component={ RenderMaskField }
              label="Numero telefonico"
              mask="+52(99)-99-99-99-99"
            />
          </Col>

          <Col className="ml-5" md={ 5 }>
            <Field 
              className="form-control"
              name="address"
              component={ GoogleSuggest }
              label="Direccion de la compañia"
            />
          </Col>

          <Col className="text-right" md={ 12 }>
            <Button 
              className="mr-3"
              type="submit" 
              disabled={ submitting }
              variant="success"
            >
              <FontAwesomeIcon icon="save" />
              &nbsp;
              Crear presupuesto
            </Button>

            <Button 
              onClick={ cancel }
              variant="danger"
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
    name: '',
    date: '',
    dateEnd: '',
    company: '',
    for: '',
    phoneNumber: '',
    address: ''
  }
  
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!values.date) {
    errors.date = 'La fecha de creación es requerida';
  }

  if (!values.dateEnd) {
    errors.dateEnd = 'La fecha final es requerida';
  }

  if (!values.for) {
    errors.for = 'La destinatario es requerido';
  }

  if (!values.company) {
    errors.company = 'La compañia es requerida';
  }

  if(!values.phoneNumber || values.phoneNumber === '+' || values.phoneNumber === '+52') {
    errors.phoneNumber = 'El numero telefonico es requerido';
  }

  if(!values.address) {
    errors.address = 'La direccion es requerida';
  }

  return errors
}

export default reduxForm({
  form: FormCreateBudgetReducerEnum.FORM_CREATE_BUDGET_SUBMIT,
  validate
})(FormCreateBudgetComponent);