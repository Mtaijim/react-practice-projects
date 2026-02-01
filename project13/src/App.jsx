import React from "react";
import { useState } from "react";
import Model from "./Model";

const App = () => {
  const [showModel, setshowmodel] = useState(false);
  return (
    <div className="Wrapper">
      {" "}
      <button
        className="btn"
        onClick={() => {
          setshowmodel(true);
        }}
      >
        {" "}
        pop up
      </button>
      <div className="Model-wrapper">
        {" "}
        {showModel && (
          <Model
            onclose={() => {
              setshowmodel(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
