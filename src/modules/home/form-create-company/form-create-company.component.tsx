import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import RenderTextField from '../../../shared/redux-form/redux-render-text-field.shared';
import { FormCreateCompanyReducerEnum } from '../../../core/enums/form-create-company-reducer.enum';
import './form-create-company.css';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormCreateCompanyComponent extends Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="example"
          component={ RenderTextField }
          label="example"
        />

        <button 
          type="submit" 
          disabled={ submitting }
        >
          Save
        </button>

        <button 
          onClick={ cancel }
        >
          Cancel
        </button>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    example: ''
  }
  
  if (!values.example) {
    errors.example = 'example is requiered';
  }

  return errors
}

export default reduxForm({
  form: FormCreateCompanyReducerEnum.FORM_CREATE_COMPANY_SUBMIT,
  validate
})(FormCreateCompanyComponent);