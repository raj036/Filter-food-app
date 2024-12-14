import React from "react";
import Gallery from "./components/Gallery";

const App = () => {
  const foodData = [
    { id: 1, name: "Pancakes", category: "breakfast", image: "/assets/pancake.jpg" },
    { id: 2, name: "Juice", category: "breakfast", image: "/assets/juice.jpg" },
    { id: 3, name: "Burger", category: "lunch", image: "/assets/burger.jpg" },
    { id: 4, name: "Salad", category: "lunch", image: "/assets/salad.jpg" },
    { id: 5, name: "Sandwich", category: "breakfast", image: "/assets/sandwich.webp" },
    { id: 6, name: "Pasta", category: "dinner", image: "/assets/pasta.jpg" },
    { id: 7, name: "Pizza", category: "dinner", image: "/assets/pizza.png" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Food Filter Gallery</h1>
      <Gallery foodData={foodData} />
    </div>
  );
};

export default App;
