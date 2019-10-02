import React from 'react';
import ReactDOM from 'react-dom';
import TermPdfComponent from './term-pdf.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TermPdfComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});