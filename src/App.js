import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExerciseWrapper from "./components/edit-exerciseWrapper.component"; // Import the wrapper
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExerciseWrapper />} /> {/* Use the wrapper here */}
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
