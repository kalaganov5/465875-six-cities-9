import React from 'react';

export const setRatingStyle = (rating: string):React.CSSProperties => ({width: `${rating}%`});

export const ratingToCss = (rating: number) => {
  const ratingStep = 20;
  const ratingCssValue = rating * ratingStep;
  return setRatingStyle(`${ratingCssValue}`);
};
