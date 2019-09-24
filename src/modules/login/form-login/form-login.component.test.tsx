import React from 'react';
import ReactDOM from 'react-dom';
import FormLoginComponent from './form-login.component';

it('renders without crashing', () => {
  const form = document.createElement('form');
  ReactDOM.render(<FormLoginComponent />, form);
  ReactDOM.unmountComponentAtNode(form);
});