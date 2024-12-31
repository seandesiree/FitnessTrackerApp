import React, { useState } from 'react';
import { deleteExercise, updateExercise, addExercise } from '../reducers/exerciseSlice';
import { useSelector, useDispatch } from 'react-redux';

const Exercises = () => {

  const [newExercise, setNewExercise, updateData, setUpdateData] = useState({
    index: null,
    type: '',
    duration: '',
    calories: ''
  });

  const dispatch = useDispatch()
  const exercises = useSelector((state) => state.exercises.exercises)

  const handleNewExerciseChange = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value });
  };
  const handleUpdateChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const startUpdate = (index) => {
    const exercise = exercises[index];
    setUpdateData({ index, ...exercise });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise(newExercise));
    setNewExercise({ type: '', duration: '', calories: '' });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExercise({ index: updateData.index, newData: updateData }));
    setUpdateData({ index: null, type: '', duration: '', calories: '' });
  };

  

  return (
    <div>
      <h2>Exercise Log</h2>
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Exercise Type"
          value={newExercise.type}
          onChange={handleNewExerciseChange}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (mins)"
          value={newExercise.duration}
          onChange={handleNewExerciseChange}
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories Burned"
          value={newExercise.calories}
          onChange={handleNewExerciseChange}
        />
        <button type="submit">Add Exercise</button>
      </form>

      <ul>
        {exercises.map((exercise, index) => (
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