import logo from './logo.svg';
import Tasks from "./Tasks";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    // { task: "Learn React", id: 1 , isCompleted: true },
    // { task: "Profit", id: 2, isCompleted: false },
  ]);
  return (
    <div className="App">
      <h4>This page is developed by Ali Sarib</h4>
      <h1> I used React Hooks in this project</h1>
      <Tasks  tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
