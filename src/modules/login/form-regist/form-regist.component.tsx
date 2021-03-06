import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import RenderImageTextField from '../../../shared/redux-form/redux-render-image-text-field.shared';
import RenderTextField from '../../../shared/redux-form/redux-render-text-field.shared';
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

interface State { 
  img: string;
}

class FormRegistComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      img: ''
    }
  }
  
  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons } = this.props;
    const { img } = this.state;

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
          img={ img }
          component={ RenderImageTextField }
          label="Imagen de usuario"
          onKeyUp={ (evt: any) => this.setState({ img: evt.target.value }) }
        />

        <Field 
          className="form-control"
          name="name"
          type="text"
          component={ RenderTextField }
          label="Nombre de usuario"
        />

        <Field 
          className="form-control"
          name="email"
          type="email"
          component={ RenderTextField }
          label="Correo"
        />

        <Field 
          className="form-control"
          name="password"
          type="password"
          component={ RenderTextField }
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
    password: '',
    img: ''
  }

  if (!values.img) {
    errors.img = 'La imagen es requerida';
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