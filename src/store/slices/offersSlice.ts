import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAsyncAction } from '../thunks/offers';
import { IOffer } from '../../types/types';

interface IOfferState {
  offers: IOffer[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IOfferState = {
  offers: [],
  isLoading: false,
  error: null,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchOffersAsyncAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchOffersAsyncAction.fulfilled, (state, action) => {
          state.offers = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchOffersAsyncAction.rejected, (state, action) => {
          state.error = action.error.message ?? 'Не удалось загрузить предложения';
          state.isLoading = false;
        });
    }
});

export const offersReducer = offersSlice.reducer;
