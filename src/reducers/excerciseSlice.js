
import { createSlice } from '@reduxjs/toolkit';

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    addExercise: (state, action) => {
      state.push(action.payload);
    },
    deleteExercise: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateExercise: (state, action) => {
      const { index, newData } = action.payload;
      state[index] = newData;
    },
  },
});

export const { addExercise, deleteExercise, updateExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;