import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DataRow } from '../types';

interface TableState {
  data: DataRow[];
  filteredData: DataRow[];
  currentPage: number;
  rowsPerPage: number;
}

const initialState: TableState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  rowsPerPage: 10,
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataRow[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setFilteredData: (state, action: PayloadAction<DataRow[]>) => {
      state.filteredData = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setData, setFilteredData, setCurrentPage } = tableSlice.actions;
export default tableSlice.reducer; 