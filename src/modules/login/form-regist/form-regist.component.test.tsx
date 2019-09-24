import React from 'react';
import ReactDOM from 'react-dom';
import FormRegistComponent from './form-regist.component';

it('renders without crashing', () => {
  const form = document.createElement('form');
  ReactDOM.render(<FormRegistComponent />, form);
  ReactDOM.unmountComponentAtNode(form);
});