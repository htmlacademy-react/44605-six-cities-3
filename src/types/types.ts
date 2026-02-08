import { store } from '../store/store';

/** Интерфейс для объекта-карточки локации */
export interface IOffer {
  id: number;
  title: string;
  type: string;
  price: number;
  city: cities;
  location: location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description?: string;
  images?: string[];
  goods?: string[];
  host?: host;
  bedrooms?: number;
  maxAdults?: number;
}

interface host {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}


interface cities {
  'name': string;
  'location': location;
}

interface location {
  'latitude': number;
  'longitude': number;
  'zoom': number;
}

/** Интерфейс для объекта город */
export interface ICity {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  selected: boolean;
}

export interface IReview {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export type SortingType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

export type Token = string;

export type State = ReturnType<typeof store.getState>; // Тип для состояния приложения

export type AppDispatch = typeof store.dispatch; // Тип для dispatch

export type AuthData = {
  email: string;
  password: string;
}

export type OfferID = {
  id: string;
}

export type UserData = {
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
