import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AptProvider } from './context';

ReactDOM.render(
  <AptProvider>
    <Router>
      <App />
    </Router>
  </AptProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
