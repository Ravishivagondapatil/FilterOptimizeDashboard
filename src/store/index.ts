import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice.js';
import tableReducer from './tableSlice.js';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 