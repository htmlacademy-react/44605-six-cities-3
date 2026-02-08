import { createReducer } from '@reduxjs/toolkit';
// import { Offers } from '../mock/offers';
import { Cities } from '../const/cities';
import {
  changeCityAction,
  changeSortingAction,
  loadingOffersAction,
  requireAuthorizationAction,
  loadingReviewsAction,
  setIsFetchingAction,
  setUserDataAction,
  loadingCurrentOfferAction
} from './actions';
import { AuthorizationStatus } from '../const/const';
import { IOffer, UserData } from '../types/types';
import { ICity, SortingType, IReview } from '../types/types';


type InitialState = {
  currentCity: ICity;
  currentOffer: IOffer | null;
  offers: IOffer[];
  isFetching: boolean | null;
  sorting: SortingType;
  isAuth: AuthorizationStatus;
  reviews: IReview[];
  errorMessage: string | null;
  userData: UserData | null;
}

const initialState: InitialState = {
  currentCity: Cities[0],
  currentOffer: null,
  offers: [],
  isFetching: null,
  sorting: 'Popular',
  isAuth: AuthorizationStatus.UNKNOWN,
  reviews: [],
  errorMessage: null,
  userData: null,
};

const reducer = createReducer(initialState,
  (builder) => {
    builder
      .addCase(changeCityAction,
        (state, action) => {
          state.currentCity = action.payload;
        })
      .addCase(changeSortingAction,
        (state, action) => {
          state.sorting = action.payload;
        })
      .addCase(requireAuthorizationAction,
        (state, action) => {
          state.isAuth = action.payload;
        })
      .addCase(setUserDataAction,
        (state, action) => {
          state.userData = action.payload;
        })
      .addCase(loadingOffersAction,
        (state, action) => {
          state.offers = action.payload;
        })
      .addCase(loadingCurrentOfferAction,
        (state, action) => {
          state.currentOffer = action.payload;
        })
      .addCase(loadingReviewsAction,
        (state, action) => {
          state.reviews = action.payload;
        })
      .addCase(setIsFetchingAction,
        (state, action) => {
          state.isFetching = action.payload;
        });
  }
);

export default reducer;
