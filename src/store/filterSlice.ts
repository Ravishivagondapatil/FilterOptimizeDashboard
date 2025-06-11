import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterState } from '../types';

interface FilterSliceState {
  selectedFilters: FilterState;
  availableOptions: {
    [key: string]: number[];
  };
}

const initialState: FilterSliceState = {
  selectedFilters: {},
  availableOptions: {},
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAvailableOptions: (
      state,
      action: PayloadAction<{ columnName: string; options: number[] }>
    ) => {
      state.availableOptions[action.payload.columnName] = action.payload.options;
    },
    setSelectedFilters: (
      state,
      action: PayloadAction<{ columnName: string; values: number[] }>
    ) => {
      state.selectedFilters[action.payload.columnName] = action.payload.values;
    },
    clearFilters: (state) => {
      state.selectedFilters = {};
    },
  },
});

export const { setAvailableOptions, setSelectedFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer; 