import Task from "./Task";
import React from 'react';
function addTask(e, tasks, setTasks) {
  e.preventDefault();
  const taskValue = e.target.elements.tname.value;
  setTasks(
    [
      ...tasks, { task: taskValue, isCompleted: false, id: ++tasks.length }
    ]
  )
}

function delAllTask(tasks, setTasks) {
  setTasks([])
}

function delTask(tasks, task, setTasks) {
  const otherTasks = tasks.filter(t => t.id !== task.id)
  setTasks(otherTasks)
}

function checkedTask(tasks, task, setTasks) {

  const completedTask = { ...task, isCompleted: true }
  const otherTasks = tasks.filter(t => t.id !== task.id)
  setTasks([
    ...otherTasks,
    completedTask
  ]);
}

function updateTask(e, tasks, task, setTasks) {
  e.preventDefault();
  const updatedValue = e.target.elements.tname.value;
  const updatedTask = { ...task, task: updatedValue }
  const otherTasks = tasks.filter(t => t.id !== task.id)
  setTasks([
    ...otherTasks,
    updatedTask
  ].sort((a, b) => (a.id > b.id) ? 1 : -1));
}

function Tasks({ tasks, setTasks }) {
  const completedTasks = tasks.filter(t => t.isCompleted === true)
  const nonCompletedTasks = tasks.filter(t => t.isCompleted === false)
  return (
    <div className="all-items">
      <h2>My Tasks</h2>
      <div className="two-buttons">
        <form id="frm1" onSubmit={(e) => addTask(e, tasks, setTasks)} >
          <input class="text-input" type="text" id="tname" name="tname" placeholder="My Task" /><br></br><br></br>
          <input type="submit" className="btn" value="Add a new task" />
          <input type="button" className="btn" onClick={() => delAllTask(tasks, setTasks)} value="Delete All Tasks" />
        </form>
      </div>

      <h4>Completed Tasks</h4>
      {completedTasks.map((task) => (
     <Task task={task} key={task.id} delTask={delTask} tasks={tasks} setTasks={setTasks} updateTask={updateTask} checkedTask={checkedTask} />
       ))}
      <h4>Non Completed Tasks</h4>
      {nonCompletedTasks.map((task) => (
        <Task task={task} key={task.id} delTask={delTask} tasks={tasks} setTasks={setTasks} updateTask={updateTask} checkedTask={checkedTask} />
      ))}
    </div>
  );
}
export default Tasks;