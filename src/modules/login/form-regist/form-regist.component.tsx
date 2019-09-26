import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormRegistReducerEnum } from '../../../core/enums/form-regist-reducer.enum';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './form-regist.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
}

interface State { }

class FormRegistComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons } = this.props;

    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            <FontAwesomeIcon icon="user-plus" size="6x" />
          </Col>
        </Row>
        
        <Field 
          className="form-control"
          name="img"
          type="text"
          component={ renderTextField }
          label="Imagen de usuario"
        />

        <Field 
          className="form-control"
          name="name"
          type="text"
          component={ renderTextField }
          label="Nombre de usuario"
        />

        <Field 
          className="form-control"
          name="email"
          type="email"
          component={ renderTextField }
          label="Correo"
        />

        <Field 
          className="form-control"
          name="password"
          type="password"
          component={ renderTextField }
          label="Contraseña"
        />

        {
          showButtons &&
            <div className="text-center mt-4">
              <Button 
                className="mr-3"
                onClick={ cancel }
                variant="danger"
              >
                <FontAwesomeIcon icon="times" />
                &nbsp;
                Cancelar
              </Button>

              <Button 
                type="submit"
                disabled={ submitting }
              >
                <FontAwesomeIcon icon="address-book" />
                &nbsp;
                Registrar
              </Button>
            </div>
        }
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    name: '',
    email: '',
    password: ''
  }

  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!values.email) {
    errors.email = 'El correo es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  return errors
}

export default reduxForm({
  form: FormRegistReducerEnum.FORM_REGIST_SUBMIT,
  validate
})(FormRegistComponent);