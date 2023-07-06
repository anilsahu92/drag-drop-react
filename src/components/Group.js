import React from "react";
import Card from "./Card";

export default function Group({ data, type, setCard, card }) {
  const newAge = () => {
    switch (type) {
      case "A":
        return 18;
      case "B":
        return 28;
      case "C":
        return 38;
      default:
        return 40;
    }
  };
  const handleOnDrop = (e) => {
    const getid = e.dataTransfer.getData("Card");
    const findData = card.map((item) => {
      if (item.id === parseInt(getid)) {
        return { ...item, age: newAge() };
      } else {
        return item;
      }
    });
    console.log("drop", card, findData, getid);
    setCard(findData);
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
    //console.log(e);
  };
  return (
    <div
      className="Dropable"
      onDrop={(e) => handleOnDrop(e)}
      onDragOver={(e) => handleOnDragOver(e)}
    >
      {data.length > 0 &&
        data.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              setCard={setCard}
              type={type}
            ></Card>
          );
        })}
    </div>
  );
}
