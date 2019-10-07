import React from 'react';
import ReactDOM from 'react-dom';
import ListCompanyComponent from './list-company.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListCompanyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});