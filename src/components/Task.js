import React from "react";

function Task({ category, text, handleDelete, id }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(id)}>
        X
      </button>
    </div>
  );
}

export default Task;
