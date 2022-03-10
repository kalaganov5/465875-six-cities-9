import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {offers, offersFavorite} from 'mocks/offers';

const Settings = {
  USER_EMAIL: 'Oliver.conner@gmail.com',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      userEmail = {Settings.USER_EMAIL}
      offers = {offers}
      offersFavorite = {offersFavorite}
    />
  </React.StrictMode>,
  document.getElementById('root'));
