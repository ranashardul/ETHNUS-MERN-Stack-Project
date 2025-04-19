import React from 'react';
import { useParams } from 'react-router-dom';
import EditExercise from './edit-exercise.component';

const EditExerciseWrapper = () => {
  const { id } = useParams(); // Get the id from the URL

  return <EditExercise match={{ params: { id } }} />; // Pass the id as a prop to EditExercise
};

export default EditExerciseWrapper;
