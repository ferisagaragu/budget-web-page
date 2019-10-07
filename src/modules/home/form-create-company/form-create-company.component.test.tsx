import React from 'react';
import ReactDOM from 'react-dom';
import FormCreateCompanyComponent from './form-create-company.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormCreateCompanyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});