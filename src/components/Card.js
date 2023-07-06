import React from "react";

export default function Card({ id, age, name }) {
  const dragHandler = (e) => {
    e.dataTransfer.setData("Card", id);
    console.log(e, id);
  };

  return (
    <div
      className="Card-Item"
      draggable
      onDragStart={(e) => dragHandler(e, id)}
    >
      Name:{name}, Age: {age}
    </div>
  );
}
