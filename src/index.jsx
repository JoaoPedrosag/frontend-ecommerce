import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global'
import Routering from './Routes/routes'
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routering />
    <ToastContainer/>
  </React.StrictMode>
);

