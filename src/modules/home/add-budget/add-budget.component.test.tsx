import React from 'react';
import ReactDOM from 'react-dom';
import AddBudgetComponent from './add-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});