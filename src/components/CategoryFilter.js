import React from "react";

function CategoryFilter({ categories, selectedCategory, handleBtnClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          name={category}
          className={selectedCategory === category ? "selected" : null}
          onClick={() => handleBtnClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
