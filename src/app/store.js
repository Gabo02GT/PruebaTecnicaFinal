import { configureStore } from '@reduxjs/toolkit';
import programReducer from '../assets/components/features/program/programSlice';

export default configureStore({
  reducer: {
    program: programReducer,
  },
});