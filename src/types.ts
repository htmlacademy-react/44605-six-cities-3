/** Интерфейс для объекта-карточки локации */
export interface Offer {
  id: number;
  price: number;
  img: string;
  title: string;
  type: string;
  rating: number;
  isFavorite?: boolean;
  premium?: boolean;
}

/** Интерфейс для массива объектов-карточек товаров */
export interface Offers {
  offers: Offer[];
}
