import React from 'react';
import ReactDOM from 'react-dom';
import ItemCompanyComponent from './item-company.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemCompanyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});