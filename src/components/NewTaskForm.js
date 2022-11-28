import React from "react";

function NewTaskForm({
  categories,
  newTask: { text, category },
  onInputChange,
  onTaskFormSubmit,
}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={onInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onInputChange}>
          {categories.map((category) =>
            category === "All" ? null : (
              <option key={category}>{category}</option>
            )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
