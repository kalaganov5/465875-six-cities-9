import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  USER_EMAIL: 'Oliver.conner@gmail.com',
};

ReactDOM.render(
  <React.StrictMode>
    <App userEmail = {Settings.USER_EMAIL} />
  </React.StrictMode>,
  document.getElementById('root'));
