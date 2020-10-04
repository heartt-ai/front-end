import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './components/Dashboard'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

