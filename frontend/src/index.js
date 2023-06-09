import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import { SparepartContextProvider } from './context/SparepartContext';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < SparepartContextProvider>
      <App />
    </ SparepartContextProvider>
  </React.StrictMode>
);

