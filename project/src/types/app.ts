type PageCode = {
  'page': string,
  'main': string,
}

// в будущем доработаю
export type AppClassName = {
  [key: string]: PageCode;
};
