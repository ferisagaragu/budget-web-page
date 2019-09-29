import React, { Component } from 'react';
import { Field, reduxForm } from '../../../imports/react-redux.import';
import { renderTextField } from '../../../shared/redux-form/redux-render-fields.shared';
import { FormCreateBudgetReducerEnum } from '../../../core/enums/form-create-budget-reducer.enum';
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
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="name"
          component={ renderTextField }
          label="Nombre"
        />

        <Field 
          className="form-control"
          name="date"
          component={ renderTextField }
          label="Fecha de creación"
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
  form: FormCreateBudgetReducerEnum.FORM_CREATE_BUDGET_SUBMIT,
  validate
})(FormCreateBudgetComponent);