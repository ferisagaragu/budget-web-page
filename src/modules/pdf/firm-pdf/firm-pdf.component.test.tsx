import React from 'react';
import ReactDOM from 'react-dom';
import FirmPdfComponent from './firm-pdf.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirmPdfComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});