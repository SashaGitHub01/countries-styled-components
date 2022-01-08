import { createAsyncThunk } from "@reduxjs/toolkit";
import { CountriesApi } from '../../API/CountriesApi';
import { createAction } from "@reduxjs/toolkit";

export const setBorders = createAction('countries/setBorders');

export const fetchAll = createAsyncThunk(
   'countries/fetchAll',
   async (_, thunk) => {
      try {
         const res = await CountriesApi.getAll();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
);

export const fetchOne = createAsyncThunk(
   'countries/fetchOne',
   async (name, thunk) => {
      try {
         const res = await CountriesApi.getByName(name);

         if (res?.borders) {
            const brCntrs = await CountriesApi.getByCodes(res.borders)

            const borders = brCntrs.map((c) => c.name);

            thunk.dispatch(setBorders(borders));
         };

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)