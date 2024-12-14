import React from "react";
import "./FoodCard.css";

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-image" />
      <div className="food-info">
        <h3 className="food-title">{food.name}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
