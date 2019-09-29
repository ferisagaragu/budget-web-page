import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormRecoverPasswordReducerEnum } from '../../../core/enums/form-recover-password-reducer.enum';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './form-recover-password.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormRecoverPasswordComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="email"
          component={ renderTextField }
          label="Correo electronico"
          type="email"
        />

        <div className="text-right">
          <Button 
            type="submit" 
            disabled={ submitting }
            variant="info"
          >
            <FontAwesomeIcon icon="undo" />
            &nbsp;
            Recuperar contraseña
          </Button>

          <Button 
            className="ml-3"
            onClick={ cancel }
            variant="danger"
          >
            <FontAwesomeIcon icon="times" />
            &nbsp;
            Cancelar
          </Button>
        </div>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    email: ''
  }
  
  if (!values.email) {
    errors.email = 'El campo de correo electronico es requerido.';
  }

  return errors
}

export default reduxForm({
  form: FormRecoverPasswordReducerEnum.FORM_RECOVER_PASSWORD_SUBMIT,
  validate
})(FormRecoverPasswordComponent);