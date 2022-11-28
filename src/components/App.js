import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS, generateID } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code",
  });
  const [tasksList, setTasksList] = useState(TASKS);

  function deleteTask(id) {
    const updatedTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTaskList);
  }

  function onBtnCategoryClick(category) {
    setSelectedCategory(() => category);
  }

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewTask((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const id = generateID();
    setTasksList((prev) => [...prev, { id: id, ...newTask }]);
    setNewTask(() => {
      return { text: "", category: "Code" };
    });
  }

  const tasksDisplay = tasksList.filter((task) =>
    selectedCategory !== "All" ? selectedCategory === task.category : true
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        handleBtnClick={onBtnCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        newTask={newTask}
        onInputChange={handleInput}
        onTaskFormSubmit={handleSubmit}
      />
      <TaskList
        tasks={tasksDisplay}
        selectedCategory={selectedCategory}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
