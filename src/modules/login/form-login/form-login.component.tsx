import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormLoginReducerEnum } from '../../../core/enums/form-login-reducer.enum';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './form-login.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
}

interface State { }

class FormLoginComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            <FontAwesomeIcon icon="user-circle" size="6x" />
          </Col>
        </Row>

        <Field 
          className="form-control"
          name="email"
          type="email"
          component={ renderTextField }
          label="Nombre de usuario"
        />

        <Field 
          className="form-control"
          name="password"
          type="password"
          component={ renderTextField }
          label="Contraseña"
        />

        <Row>
          <Col md={ 12 } className="text-center mb-3">
            <a href="#" onClick={ () => { console.log('data') }}>¿Has olvidado tu contraseña?</a>
          </Col>
        </Row>

        {
          showButtons &&
            <div className="text-center mt-4">
              <Button 
                className="mr-3"
                onClick={ cancel }
              >
                <FontAwesomeIcon icon="plus-circle" />
                &nbsp;
                Registrar
              </Button>

              <Button 
                type="submit"
                variant="success" 
                disabled={ submitting }
              >
                <FontAwesomeIcon icon="address-card" />
                &nbsp;
                Entrar
              </Button>
            </div>
        }
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    email: '',
    password: ''
  }
  
  if (!values.email) {
    errors.email = 'El nombre de usuario es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  return errors
}

export default reduxForm({
  form: FormLoginReducerEnum.FORM_LOGIN_SUBMIT,
  validate
})(FormLoginComponent);