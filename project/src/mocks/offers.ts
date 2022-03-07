import {Offer} from '../types/app';

export const offers: Offer[] = [
  {
    id: 1,
    city: {
      name: 'Kiev',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'img/apartment-01.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 1.5,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    type: 'Private room',
    bedrooms: 3,
    maxAdults: 4,
    price: 90,
    options: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine', 'Cabel TV', 'Towels'],
  },
  {
    id: 2,
    city: {
      name: 'Moscow',
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
    previewImage: 'img/apartment-02.jpg',
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
    rating: 4,
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
    previewImage: 'img/apartment-03.jpg',
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
    isPremium: true,
    rating: 4.8,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    type: 'Apartment',
    bedrooms: 3,
    maxAdults: 4,
    price: 210,
    options: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine', 'Cabel TV', 'Towels'],
  },
  {
    id: 4,
    city: {
      name: 'Minsk',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: '4Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Emelya',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'img/apartment-01.jpg',
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
    id: 5,
    city: {
      name: 'Minsk',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: '4Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Emelya',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'img/apartment-01.jpg',
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
    id: 6,
    city: {
      name: 'Minsk',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    title: '4Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Emelya',
      isPro: true,
      avatar: 'avatar.svg',
    },
    previewImage: 'img/apartment-01.jpg',
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
