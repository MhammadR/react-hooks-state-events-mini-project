import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  const tasksDisplay = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      category={task.category}
      text={task.text}
      handleDelete={deleteTask}
    />
  ));

  return <div className="tasks">{tasksDisplay}</div>;
}

export default TaskList;
