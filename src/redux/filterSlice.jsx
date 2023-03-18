import { createSlice } from '@reduxjs/toolkit';
export const FilterSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = FilterSlice.actions;
