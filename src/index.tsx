import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextWarpper } from './GlobalContext/ContextWarpper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ContextWarpper>
    <App />
  </ContextWarpper>
  //</React.StrictMode>
);
