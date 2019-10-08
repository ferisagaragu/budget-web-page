import React from 'react';
import ReactDOM from 'react-dom';
import ItemEditCompanyComponent from './item-edit-company.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemEditCompanyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});