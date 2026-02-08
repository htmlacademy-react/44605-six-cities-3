import { createAction } from '@reduxjs/toolkit';
import { ICity, IOffer, IReview, UserData } from '../types/types';
import { SortingType } from '../types/types';
import { AuthorizationStatus } from '../const/const';

const enum ActionType {
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadingOffers = 'loadingOffers',
  LoadingCurrentOffer = 'loadingCurrentOfferAction',
  LoadingReviews = 'loadingReviews',
  RequireAuthorization = 'requireAuthorization',
  SetIsFetching = 'setIsFetching',
  SetUserData = 'setUserData',
}

// Описание действий
/** Действие для изменения города */
export const changeCityAction = createAction(ActionType.ChangeCity, (city: ICity) => ({
  payload: city,
}));

/** Действие для изменения типа сортировки */
export const changeSortingAction = createAction(ActionType.ChangeSorting, (sorting: SortingType) => ({
  payload: sorting,
}));

/** Действие для изменения статуса авторизации */
export const requireAuthorizationAction = createAction(ActionType.RequireAuthorization, (status: AuthorizationStatus) => ({
  payload: status,
}));

/** Действие для заполнения списка предложений */
export const loadingOffersAction = createAction(ActionType.LoadingOffers, (offers: IOffer[]) => ({
  payload: offers,
}));

export const loadingCurrentOfferAction = createAction(ActionType.LoadingCurrentOffer, (currentOffer: IOffer) => ({
  payload: currentOffer
}));

/** Действие для заполнения списка отзывов */
export const loadingReviewsAction = createAction(ActionType.LoadingReviews, (reviews: IReview[]) => ({
  payload: reviews,
}));

export const setIsFetchingAction = createAction(ActionType.SetIsFetching, (isFetching: boolean) => ({
  payload: isFetching,
}));

export const setUserDataAction = createAction(ActionType.SetUserData, (userData: UserData | null) => ({
  payload: userData,
}));
