// import "./task.css";

import Delete from "./delete.PNG";
import React, { useReducer } from 'react';
function Task({ task, delTask, tasks, setTasks, updateTask, checkedTask }) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
  );
  const formId = "task-form-" + task.id
  const textId = "task-input-" + task.id
  return (
    <div key={task.id}>
      <div className="tasks-formatting">
        <form id={formId} className="taskForm" onSubmit={(e) => updateTask(e, tasks, task, setTasks)} >
          <input class="text-input" type="text" id={textId} name="tname" placeholder="Update Task" defaultValue={task.task} />
          <input type="submit" className="btn" value="Update Task" />
          <input
            className="cbx"
            type="checkbox"
            value={checked}
            onClick={() => checkedTask(tasks, task, setTasks)}
            onChange={toggle}
          />
          <img src={Delete} alt="delete" width="30" onClick={() => delTask(tasks, task, setTasks)} />
        </form>
      </div>
    </div >

  );
}

export default Task;