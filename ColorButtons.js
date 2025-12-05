import React from "react";

export default function ColorButtons({ onColorSelect }) {
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="buttons">
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => onColorSelect(c)}
          className="color-btn"
          style={{ backgroundColor: c }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
