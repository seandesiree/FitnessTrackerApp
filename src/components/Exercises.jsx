import React, { useState } from 'react';
import { deleteExercise, updateExercise } from './exerciseSlice';

const Exercises = () => {

  const [updateData, setUpdateData] = useState({
    index: null,
    type: '',
    duration: '',
    calories: ''
  });

  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const startUpdate = (index) => {
    const exercise = Exercises[index];
    setUpdateData({ index, ...exercise });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExercise({ index: updateData.index, newData: updateData }));
    setUpdateData({ index: null, type: '', duration: '', calories: '' });
  };

  return (
    <div>
      <h2>Exercise Log</h2>
      ... // Existing add exercise form

      <ul>
        {Exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.type} - {exercise.duration} mins - {exercise.calories} kcal
            <button onClick={() => dispatch(deleteExercise(index))}>Delete</button>
            <button onClick={() => startUpdate(index)}>Update</button>
          </li>
        ))}
      </ul>

      {updateData.index !== null && (
        <form onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            name="type"
            placeholder="Exercise Type"
            value={updateData.type}
            onChange={handleUpdateChange}
          />
          <input
            type="number"
            name="duration"
            placeholder="Duration (mins)"
            value={updateData.duration}
            onChange={handleUpdateChange}
          />
          <input
            type="number"
            name="calories"
            placeholder="Calories Burned"
            value={updateData.calories}
            onChange={handleUpdateChange}
          />
          <button type="submit">Update Exercise</button>
        </form>
      )}
    </div>
  );
};

export default Exercises;