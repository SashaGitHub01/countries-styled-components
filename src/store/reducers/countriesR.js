import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchAll, fetchOne, setBorders } from '../actionCreators/countries';

const initialState = {
   countries: [],
   activePage: {},
   borders: [],
   isLoadingPage: false,
   errorPage: null,
   isLoading: false,
   error: null,
}

const countriesSlice = createSlice({
   name: 'countries',
   initialState,
   extraReducers: {
      [setBorders]: (state, action) => {
         state.borders = action.payload
      },

      [fetchAll.fulfilled.type]: (state, action) => {
         state.countries = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchAll.pending.type]: (state, action) => {
         state.isLoading = true;
      },

      [fetchAll.rejected.type]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },

      [fetchOne.fulfilled.type]: (state, action) => {
         state.activePage = action.payload;
         state.isLoadingPage = false;
         state.errorPage = null;
      },

      [fetchOne.pending.type]: (state, action) => {
         state.isLoadingPage = true;
      },

      [fetchOne.rejected.type]: (state, action) => {
         state.isLoadingPage = false;
         state.errorPage = action.payload;
      },
   },
   reducers: {
      setBorders(state, action) {
         state.borders = action.payload
      }
   },
})

export const countriesReducer = countriesSlice.reducer;