type PageCode = {
  'page': {
    'default': string,
    'empty'?: string,
  },
  'main': {
    'default': string,
    'empty'?: string,
  },
}

export type citiesTypes = string[];

// в будущем доработаю
export type AppClassName = {
  [key: string]: PageCode;
};

type User = {
  id: number,
  name: string,
  isPro: boolean,
  avatar: string,
}

type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

type OfferImage = {
  src: string,
  description: string,
}

export interface Offer {
  id: number,
  city: {
    name: string,
    location: Location,
  }
  title: string,
  description: string,
  host: User,
  previewImage: string,
    images: OfferImage[],
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  location: Location,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  options: string[],
}

export type Review = {
  id: number,
  user: User,
  comments: string,
  date: string,
  rating: number,
}

export type Reviews = Review[];

export type Offers = Offer[];
