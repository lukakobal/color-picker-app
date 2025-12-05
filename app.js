import React, { useState } from "react";
import "./styles.css";
import ColorButtons from "../ColorButtons";

export default function App() {
  const [color, setColor] = useState("white");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>Pick a Color 🎨</h1>
      <p>Selected color: {color}</p>

      <ColorButtons onColorSelect={handleColorChange} />
    </div>
  );
}
