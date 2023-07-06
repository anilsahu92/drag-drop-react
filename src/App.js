import { useState } from "react";
import "./App.css";
import Group from "./components/Group";
import Form from "./components/Form";

function App() {
  const [card, setCard] = useState([]);

  function cardReset(data) {
    let newData;
    switch (data) {
      case 1:
        return card.filter((item) => item.age <= 19);
      case 2:
        newData = card.filter((item) => item.age >= 20 && item.age <= 29);
        break;
      case 3:
        newData = card.filter((item) => item.age >= 30 && item.age <= 39);
        break;
      default:
        newData = card.filter((item) => item.age >= 40);
        break;
    }

    return newData;
  }

  return (
    <div className="App">
      <div className="container">
        <Form setCard={setCard} />
        <div className="d-flex">
          <div className="block">
            <h2>Age 1-19</h2>
            <Group data={cardReset(1)} type="A" setCard={setCard} card={card} />
          </div>
          <div className="block">
            <h2>Age 20-29</h2>
            <Group data={cardReset(2)} type="B" setCard={setCard} card={card} />
          </div>
          <div className="block">
            <h2>Age 30-39</h2>
            <Group data={cardReset(3)} type="C" setCard={setCard} card={card} />
          </div>
          <div className="block">
            <h2>Age 40 and plus</h2>
            <Group data={cardReset(4)} type="D" setCard={setCard} card={card} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
