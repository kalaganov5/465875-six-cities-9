export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
}

export const appClassName: {
  [K: string]: {
    [K: string]: string,
  },
} = {
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
