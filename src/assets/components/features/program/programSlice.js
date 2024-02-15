import { createSlice } from '@reduxjs/toolkit';

const programSlice = createSlice({
  name: 'program',
  initialState: { movies: [], series: [] },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { setMovies, setSeries } = programSlice.actions;

export default programSlice.reducer;