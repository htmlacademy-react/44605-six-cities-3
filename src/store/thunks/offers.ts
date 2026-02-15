import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/const';
import { IOffer } from '../../types/types';
import { AxiosInstance } from 'axios';

export const fetchOffersAsyncAction = createAsyncThunk<
  IOffer[], void, { extra: AxiosInstance }
>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IOffer[]>(APIRoute.OFFERS);
    return data;
  }
);

// В дженерике
// первый тип - это тип возвращаемого значения,
// второй тип - это тип аргумента,
// третий тип - это тип дополнительных параметров.
