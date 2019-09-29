import React from 'react';
import ReactDOM from 'react-dom';
import CardBudgetComponent from './card-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});