import React from 'react';
import ReactDOM from 'react-dom';
import FormRecoverPasswordComponent from './form-recover-password.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormRecoverPasswordComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});