import React from 'react';
import ReactDOM from 'react-dom';
import StatusLoginComponent from './status-login.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusLoginComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});