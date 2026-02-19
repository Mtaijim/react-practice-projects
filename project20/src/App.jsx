import React from "react";
import useWindowResize from "./Index";

const App = () => {
  const windowResize = useWindowResize();
  const { width, height } = windowResize;
  return (
    <div>
      <div>windows resize</div>
      <div>
        <p>width is{width}</p>
        <p>height is {height} </p>
      </div>
    </div>
  );
};

export default App;
