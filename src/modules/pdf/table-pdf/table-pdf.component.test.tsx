import React from 'react';
import ReactDOM from 'react-dom';
import TablePdfComponent from './table-pdf.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TablePdfComponent dataTable={ [] } />, div);
  ReactDOM.unmountComponentAtNode(div);
});