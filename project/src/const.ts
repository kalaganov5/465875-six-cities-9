import {AppClassName} from './types/app';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
  PropertyId = ':id',
}

export const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const appClassName: AppClassName = {
  [AppRoute.Root]: {
    'page': 'page--gray page--main',
    'main': 'page__main--index',
  },
  [AppRoute.Login]: {
    'page': 'page--gray page--login',
    'main': 'page__main--login',
  },
  [AppRoute.Favorites]: {
    'page': '',
    'main': 'page__main--favorites',
  },
  [AppRoute.Property]: {
    'page': '',
    'main': 'page__main--property',
  },
};
