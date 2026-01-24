import React, { useState } from "react";
import MenuItems from "./menuItems";

const Menulist = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listitems) => (
            <MenuItems item={listitems} key={listitems.id} />
          ))
        : null}
    </ul>
  );
};

export default Menulist;
