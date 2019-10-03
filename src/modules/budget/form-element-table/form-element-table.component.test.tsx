import React from 'react';
import ReactDOM from 'react-dom';
import FormElementTableComponent from './form-element-table.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormElementTableComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});