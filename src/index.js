import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProviderWrapper from './Context/ContextProviderWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProviderWrapper>
        <App />
      </ContextProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
