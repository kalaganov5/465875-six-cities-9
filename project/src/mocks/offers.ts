import {Offer} from '../types/app';

export const offers: Offer[] = [
  {
    id: 1,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: '../../public/img/apartment-small-03.jpg',
    images: [
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-02.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-03.jpg',
        description: 'alt text',
      },
      {
        src: 'room.jpg',
        description: 'alt text',
      },
      {
        src: 'studio-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
    ],
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    options: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine', 'Cabel TV', 'Towels'],
  },
  {
    id: 2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: '2Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'apartment-small-03.jpg',
    images: [
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-02.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-03.jpg',
        description: 'alt text',
      },
      {
        src: 'room.jpg',
        description: 'alt text',
      },
      {
        src: 'studio-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
    ],
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    options: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine', 'Cabel TV', 'Towels'],
  },
  {
    id: 3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: '3Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Emelya',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'apartment-small-03.jpg',
    images: [
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-02.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-03.jpg',
        description: 'alt text',
      },
      {
        src: 'room.jpg',
        description: 'alt text',
      },
      {
        src: 'studio-01.jpg',
        description: 'alt text',
      },
      {
        src: 'apartment-01.jpg',
        description: 'alt text',
      },
    ],
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    options: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine', 'Cabel TV', 'Towels'],
  },
];
