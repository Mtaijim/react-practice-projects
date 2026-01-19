import React from "react";
import { useState } from "react";

const Index = () => {
  const [typeofcolor, SetTypeofcolor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  function RandomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[RandomUtility(hex.length)];
    }
    setcolor(hexcolor);
  }
  function handleCreateRandomRgbColor() {
    const r = RandomUtility(256);
    const g = RandomUtility(256);
    const b = RandomUtility(256);
    setcolor(`rgb(${r},${g},${b})`);
  }

  return (
    <>
      <div
        className="wrapper"
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <button onClick={() => SetTypeofcolor("hex")}>Create hex </button>
        <button onClick={() => SetTypeofcolor("rgb")}>Create rgb</button>
        <button
          onClick={
            typeofcolor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Create random color{" "}
        </button>
        <div className="container">
          <p>type-of-color: {typeofcolor}</p>
          <p>color:{color}</p>
        </div>
      </div>
    </>
  );
};

export default Index;
