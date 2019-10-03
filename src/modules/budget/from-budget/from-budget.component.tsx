import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField, renderPhoneInput } from '../../../shared/redux-form/redux-render-fields.shared';
import { FromBudgetReducerEnum } from '../../../core/enums/from-budget-reducer.enum';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderDatePicker from '../../../shared/redux-form/redux-render-datepicker.shared';
import renderSingleSelect from '../../../shared/redux-form/redux-render-singleselect.shared';
import GoogleSuggest from '../../../shared/redux-form/redux-render-googlesuggest.shared';
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
        <Row>
          <Col md={ 6 }>
            <Field 
              className="form-control"
              name="name"
              component={ renderTextField }
              label="Nombre del presupuesto"
            />
          </Col>

          <Col md={ 6 }>
            <Field 
              className="form-control"
              name="date"
              component={ renderDatePicker }
              label="Fecha de creación"
              dateFormat="d - MMMM - yyyy"
              disabled="disabled"
            />
          </Col>

          <Col md={ 6 }>
            <Field 
              className="form-control"
              name="dateEnd"
              label="Fecha de final"
              component={ renderDatePicker }
              dateFormat="d - MMMM - yyyy"
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="for"
              component={ renderTextField }
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
              defaultValue={ { value: '1', label: 'FerGarGod' } }
            />
          </Col>

          <Col md={ 3 }>
            <Field 
              className="form-control"
              name="phoneNumber"
              component={ renderPhoneInput }
              label="Numero telefonico"
              defaultCountry="mx"
            />
          </Col>

          <Col md={ 5 }>
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
    name: ''
  }
  
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  return errors
}

export default reduxForm({
  form: FromBudgetReducerEnum.FROM_BUDGET_SUBMIT,
  validate
})(FromBudgetComponent);