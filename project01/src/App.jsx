import React, { useState } from "react";

const App = () => {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [result, setresult] = useState("");

  const calculatebmi = () => {
    const heightInmeters = height / 100;
    const finalresult = weight / (heightInmeters * heightInmeters);
    setresult(finalresult.toFixed(2));
  };

  return (
    <div className="container">
      <h1> BMI CALCULATOR</h1>

      <div className="inner-container">
        <label htmlFor="height">height</label>
        <input
          type="number"
          placeholder="eg :170"
          value={height}
          onChange={(e) => setheight(e.target.value)}
        />
        <label htmlFor="weight">weight</label>
        <input
          type="number"
          placeholder="eg :80"
          value={weight}
          onChange={(e) => setweight(e.target.value)}
        />
      </div>
      <div className="result-container">
        <button onClick={calculatebmi}>calculate</button>
        <p> Your bmi {result}</p>
      </div>
    </div>
  );
};

export default App;
