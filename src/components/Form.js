import React, { useState } from "react";

export default function Form({ setCard }) {
  const [data, setData] = useState({ name: "", age: "" });
  const id = Math.floor(Math.random() * 1000) + 1000;

  function changeHandler(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    //setDat
  }

  function addData() {
    console.log("data", data);
    if (data.name !== "" && data.age > 0) {
      setCard((item) => [...item, { ...data, id }]);
      setData({ name: "", age: "" });
    }
  }
  return (
    <div className="formData">
      Form
      <input
        type="text"
        value={data.name}
        name="name"
        onChange={(e) => changeHandler(e)}
      />
      <input
        type="number"
        value={data.age}
        name="age"
        onChange={(e) => changeHandler(e)}
      />
      <input type="button" value="add" onClick={() => addData()} />
    </div>
  );
}
