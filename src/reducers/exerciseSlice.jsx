
import { createSlice } from '@reduxjs/toolkit';

const initialState = {exercises: []}
const exerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
    deleteExercise: (state, action) => {
      return state.exercises.filter((_, index) => index !== action.payload);
    },
    updateExercise: (state, action) => {
      const { index, newData } = action.payload;
      state.exercises[index] = newData;
    },
  },
});

export const { addExercise, deleteExercise, updateExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;