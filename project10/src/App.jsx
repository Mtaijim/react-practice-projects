import { useState } from "react";
import UseLocalstorage from "./Index";
import "./index.css";

const App = () => {
  const [theme, setheme] = UseLocalstorage("theme", "dark");
  function handleToggletheme() {
    setheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>hello !!!</p>
        <button onClick={handleToggletheme}> change theme</button>
      </div>
    </div>
  );
};

export default App;
