import React, { useState } from "react";
import FoodCard from "./FoodCard";
import "./Gallery.css";

const Gallery = ({ foodData }) => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "breakfast", "lunch", "dinner"];

  const filteredFoods =
    filter === "all"
      ? foodData
      : foodData.filter((food) => food.category === filter);

  return (
    <div className="gallery-container">
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-btn ${filter === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="food-grid">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
