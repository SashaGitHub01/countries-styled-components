import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/countriesR";

const rootReducer = combineReducers({
   countries: countriesReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}