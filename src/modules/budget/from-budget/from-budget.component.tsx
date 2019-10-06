import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import RenderTextField from '../../../shared/redux-form/redux-render-text-field.shared';
import RenderTextArea from '../../../shared/redux-form/redux-render-text-area.shared';
import { FromBudgetReducerEnum } from '../../../core/enums/from-budget-reducer.enum';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RenderDatePicker from '../../../shared/redux-form/redux-render-date-picker.shared';
import renderSingleSelect from '../../../shared/redux-form/redux-render-single-select.shared';
import GoogleSuggest from '../../../shared/redux-form/redux-render-google-suggest.shared';
import TableBudgetComponent from '../table-budget/table-budget.component';
import { BudgetTableModel } from '../../../core/models/budget-table.model';
import './from-budget.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  onAddTable: Function;
  onEditTable: Function;
  onDrop: Function;
  onPdf: Function;
}

interface State { }

class FromBudgetComponent extends Component<Props, State> {
  render() {
    const { 
      initialValues, 
      handleSubmit, 
      cancel, 
      submitting, 
      submitActions, 
      onAddTable, 
      onEditTable,
      onDrop,
      onPdf 
    } = this.props;

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
              component={ RenderDatePicker }
              label="Fecha de creación"
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="dateEnd"
              label="Fecha de final"
              component={ RenderDatePicker }
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="for"
              component={ RenderTextField }
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
              defaultValue={ initialValues.company }
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="phoneNumber"
              component={ RenderTextField }
              label="Numero telefonico"
              type="number"
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
            onAddTable={ () => onAddTable() }
            onEditTable={ (data: BudgetTableModel) => onEditTable(data) }
            onDrop={ (index: number) => onDrop(index) }
          />

          <Col md={ 12 }>
            <Field 
              className="form-control"
              name="workforce"
              component={ RenderTextField }
              label="Mano de obra"
              type="number"
            />
          </Col>

          <Col md={ 12 }>
            <Field 
              className="form-control terms"
              name="term"
              component={ RenderTextArea }
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
              onClick={ () => onPdf() }
            >
              <FontAwesomeIcon icon="file-pdf" />
              &nbsp;
              Ver en PDF
            </Button>

            <Button 
              variant="primary"
              onClick={ cancel }
            >
              <FontAwesomeIcon icon="reply" />
              &nbsp;
              Regresar
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