import React from 'react';
import ReactDOM from 'react-dom';
import FromBudgetComponent from './from-budget.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FromBudgetComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});