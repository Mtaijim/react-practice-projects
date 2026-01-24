import React from "react";
import Index from "./components/Index";
import Menus from "./components/Menus";

const App = () => {
  return (
    <div>
      <Index Menus={Menus} />
    </div>
  );
};

export default App;
