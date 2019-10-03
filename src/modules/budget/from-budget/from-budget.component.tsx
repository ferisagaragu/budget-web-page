import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField, renderPhoneInput, renderTextArea } from '../../../shared/redux-form/redux-render-fields.shared';
import { FromBudgetReducerEnum } from '../../../core/enums/from-budget-reducer.enum';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderDatePicker from '../../../shared/redux-form/redux-render-datepicker.shared';
import renderSingleSelect from '../../../shared/redux-form/redux-render-singleselect.shared';
import GoogleSuggest from '../../../shared/redux-form/redux-render-googlesuggest.shared';
import TableBudgetComponent from '../table-budget/table-budget.component';
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
    const { initialValues, handleSubmit, cancel, submitting, submitActions } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="mb-3">
            <h3>
              { initialValues.name }
            </h3>
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="date"
              component={ renderDatePicker }
              label="Fecha de creación"
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="dateEnd"
              label="Fecha de final"
              component={ renderDatePicker }
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="for"
              component={ renderTextField }
              label="Para"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              name="company"
              component={ renderSingleSelect }
              label="Compañia"
              options={ [{ value: '1', label: 'FerGarGod' }, { value: '2', label: 'FerGarGod2' }] }
              noOptionsMessage="No se encontraron coincidencias"
              defaultValue={ { value: '1', label: 'FerGarGod' } }
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="phoneNumber"
              component={ renderPhoneInput }
              label="Numero telefonico"
              defaultCountry="mx"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="address"
              component={ GoogleSuggest }
              label="Direccion de la compañia"
            />
          </Col>

          <TableBudgetComponent 
            dataTable={ initialValues.budgetTable }
          />

          <Col md={ 12 }>
            <Field 
              className="form-control terms"
              name="term"
              component={ renderTextArea }
              label="Terminos y condiciones"
            />
          </Col>

          <Col className="text-right mt-5 mb-3" md={ 12 }>
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
    date: '',
    dateEnd: '',
    for: '',
    company: '',
    phoneNumber: '',
    address: '',
    term: ''
  }
  
  if (!values.date) {
    errors.date = 'La fecha de inicio es requerida';
  }

  if (!values.dateEnd) {
    errors.dateEnd = 'La fecha de final es requerida';
  }

  if (!values.for) {
    errors.for = 'El destinatario es requerido';
  }

  if (!values.company) {
    errors.company = 'La compañia es requerida';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'El numero telefonico es requerido';
  }

  if (!values.address) {
    errors.address = 'La direccion es requerida';
  }

  if (!values.term) {
    errors.term = 'Los terminos y condiciones son requeridos';
  }

  return errors
}

export default reduxForm({
  form: FromBudgetReducerEnum.FROM_BUDGET_SUBMIT,
  validate
})(FromBudgetComponent);