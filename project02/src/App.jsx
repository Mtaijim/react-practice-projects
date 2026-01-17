import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="count-container">
          <div className="counter">
            {" "}
            <h1>{count}</h1>{" "}
          </div>{" "}
          <button onClick={() => setCount((count) => count + 1)}> + </button>{" "}
          <button onClick={() => setCount((count) => (count = 0))}>
            {" "}
            reset{" "}
          </button>{" "}
          <button onClick={() => setCount((count) => count - 1)}>
            {" "}
            -{" "}
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
