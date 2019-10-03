import React from 'react';
import ReactDOM from 'react-dom';
import TableBudgetComponent from './table-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});