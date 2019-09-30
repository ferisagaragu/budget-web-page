import React from 'react';
import ReactDOM from 'react-dom';
import ListBudgetComponent from './list-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});