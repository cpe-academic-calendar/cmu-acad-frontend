import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextWrapper } from './Pages/CalendarEdit/Components/Context/ContextWarpper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <ContextWrapper>
    <App />
  // </ContextWrapper>
  //</React.StrictMode>
);
