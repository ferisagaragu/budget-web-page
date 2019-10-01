import React from 'react';
import ReactDOM from 'react-dom';
import HeaderPdfComponent from './header-pdf.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderPdfComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});