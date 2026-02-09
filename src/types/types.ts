import { store } from '../store/store';
import { AuthorizationStatus } from '../const/const';

export type InitialState = {
  currentCity: ICity;
  currentOffer: IOffer | null;
  nearbyOffers: IOffer[];
  offers: IOffer[];
  isFetching: boolean | null;
  sorting: SortingType;
  isAuth: AuthorizationStatus;
  reviews: IReview[] | null;
  errorMessage: string | null;
  userData: UserData | null;
}

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
  host?: userType;
  bedrooms?: number;
  maxAdults?: number;
}

export interface userType {
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
  rating: number;
  date: string;
  comment: string;
  user: userType;
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
