import {AppClassName, citiesTypes} from 'types/app';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
}

export const cities:citiesTypes = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const appClassName: AppClassName = {
  [AppRoute.Root]: {
    'page': {
      'default': 'page--gray page--main',
    },
    'main': {
      'default': 'page__main--index',
    },
  },
  [AppRoute.Login]: {
    'page': {
      'default': 'page--gray page--login',
    },
    'main': {
      'default': 'page__main--login',
    },
  },
  [AppRoute.Favorites]: {
    'page': {
      'default': '',
      'empty': 'page--favorites-empty',
    },
    'main': {
      'default': 'page__main--favorites',
      'empty': 'page__main--favorites page__main--favorites-empty',
    },
  },
  [AppRoute.Property]: {
    'page': {
      'default': '',
    },
    'main': {
      'default': 'page__main--property',
    },
  },
};

export const OFFER_CARD = {
  favorites: 'favorites',
  cities: 'cities',
  nearPlaces: 'near-places',
};

export const ratingData = [
  {
    name: 'perfect',
    value: 5,
  },
  {
    name: 'good',
    value: 4,
  },
  {
    name: 'not bad',
    value: 3,
  },
  {
    name: 'badly',
    value: 2,
  },
  {
    name: 'terribly',
    value: 1,
  },
];
