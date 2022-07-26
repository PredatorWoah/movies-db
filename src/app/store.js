import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "../features/searchSlice";
import { moviesApi } from "../features/Api";
import idReducer from "../features/idSlice";
import buttonReducer from '../features/buttonSlice'

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchReducer,
    id: idReducer,
    button:buttonReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);
