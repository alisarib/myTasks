import logo from './logo.svg';
import Tasks from "./Tasks";
import LandingPage from "./landingPage";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    // { task: "Learn React", id: 1 , isCompleted: true },
    // { task: "Profit", id: 2, isCompleted: false },
  ]);
  return (
    <div className="App">
      <LandingPage  tasks={tasks} setTasks={setTasks} />
      {/* <Tasks  tasks={tasks} setTasks={setTasks} /> */}
    </div>
  );
}

export default App;
