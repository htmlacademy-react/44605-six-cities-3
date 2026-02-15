import { IOffer, TSortingType } from '../../types/types';

export const getSortedOffers = (offers: IOffer[], currentSorting: TSortingType): IOffer[] => {
  const newOffers = [...offers];
  newOffers.sort((a, b) => {
    switch (currentSorting) {
      case 'Popular':
        return 0;
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
    }
  });
  return newOffers;
};
