import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Provider from './context/Provider';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <App />
  </Provider>,
);