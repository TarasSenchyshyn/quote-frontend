import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quoteReducer from './reducers/QuoteSlice';

const rootReducer = combineReducers({
  quoteReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
