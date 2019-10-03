import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormElementTableReducerEnum } from '../../../core/enums/form-element-table-reducer.enum';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './form-element-table.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormElementTableComponent extends Component<Props, State> {
  render() {
    const { initialValues, handleSubmit, cancel, submitting, submitActions } = this.props;
    
    console.log(initialValues);

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="description"
          component={ renderTextField }
          label="Descripción"
        />

        <Field 
          className="form-control"
          name="unitPrice"
          type="number"
          component={ renderTextField }
          label="Precio unitario"
        />

        <Field 
          className="form-control"
          name="pice"
          type="number"
          component={ renderTextField }
          label="Numero de piezas"
        />

        <Row>
          <Col className="text-right">
            <Button 
              className="mr-3"
              type="submit" 
              variant="success"
              disabled={ submitting }
            >
              <FontAwesomeIcon icon="save" />
              &nbsp;
              Guardar
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
    description: '',
    unitPrice: '',
    pice: '',
    total: ''
  }
  
  if (!values.description) {
    errors.description = 'La descripción es requerida';
  }

  if (!values.unitPrice) {
    errors.unitPrice = 'El precio unitario es requerido';
  }

  if (!values.pice) {
    errors.pice = 'El precio es requerido';
  }

  return errors
}

export default reduxForm({
  form: FormElementTableReducerEnum.FORM_ELEMENT_TABLE_SUBMIT,
  validate
})(FormElementTableComponent);