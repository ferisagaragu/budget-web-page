import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './imports/react-redux.import';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './modules/app';
import * as serviceWorker from './serviceWorker';
import { store } from './config/app.config';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/stylesheet/index.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-phone-input-2/dist/style.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();