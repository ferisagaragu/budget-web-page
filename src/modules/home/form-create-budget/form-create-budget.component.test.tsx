import React from 'react';
import ReactDOM from 'react-dom';
import FormCreateBudgetComponent from './form-create-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormCreateBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});