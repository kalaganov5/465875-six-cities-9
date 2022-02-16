import React from 'react';
import ReactDOM from 'react-dom';
import App, {CurrentLocation} from './components/app/app';

const Settings = {
  USER_EMAIL: 'Oliver.conner@gmail.com',
};

const currentLocation = CurrentLocation.MAIN;

ReactDOM.render(
  <React.StrictMode>
    <App
      userEmail = {Settings.USER_EMAIL}
      currentLocation = {currentLocation}
    />
  </React.StrictMode>,
  document.getElementById('root'));
