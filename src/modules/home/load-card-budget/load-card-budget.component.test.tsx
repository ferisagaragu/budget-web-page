import React from 'react';
import ReactDOM from 'react-dom';
import LoadCardBudgetComponent from './load-card-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadCardBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});