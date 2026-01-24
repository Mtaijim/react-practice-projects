import React from "react";
import Menulist from "./menuList";
import Menus from "./Menus";

const Index = ({ Menus = [] }) => {
  return (
    <div>
      <Menulist list={Menus} />
    </div>
  );
};

export default Index;
