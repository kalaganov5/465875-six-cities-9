import {Review} from 'types/app';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatar: 'avatar.svg',
    },
    comments: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Mon Mar 07 2022 14:31:51 GMT+0300 (Moscow Standard Time)',
    rating: 3.0,
  },
  {
    id: 2,
    user: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatar: 'avatar.svg',
    },
    comments: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Mon Mar 07 2022 14:31:51 GMT+0300 (Moscow Standard Time)',
    rating: 3.0,
  },
];
