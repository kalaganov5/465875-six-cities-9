type PageCode = {
  'page': string,
  'main': string,
}

// в будущем доработаю
export type AppClassName = {
  [key: string]: PageCode;
};

export type Offer = {
  id: number,
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
  }
  title: string,
  description: string,
  host: {
    id: number,
    name: string,
    isPro: boolean,
    avatar: string,
  },
  previewImage: string,
    images: {
      src: string,
      description: string,
    }[],
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  options: string[],
}
