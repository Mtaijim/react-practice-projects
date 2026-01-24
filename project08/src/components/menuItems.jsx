import React from "react";
import Menus from "./Menus";
import { useState } from "react";

const MenuItems = ({ item }) => {
  const [displaycurrentchildren, setCurrentchildren] = useState({});
  function handleTogglechildren(getcurrentid) {
    setCurrentchildren({
      ...displaycurrentchildren,
      [getcurrentid]: !displaycurrentchildren[getcurrentid],
    });
  }
  return (
    <li>
      {item.type === "folder" ? "📁" : "📃"}
      {item.name}
      {item.children && item.children.length ? (
        <span onClick={() => handleTogglechildren(item.id)}>
          {" "}
          {displaycurrentchildren[item.id] ? "➖" : "➕"}
        </span>
      ) : null}

      {item.children &&
        item.children.length > 0 &&
        displaycurrentchildren[item.id] && (
          <ul>
            {item.children.map((child) => (
              <MenuItems key={child.id} item={child} />
            ))}
          </ul>
        )}
    </li>
  );
};

export default MenuItems;
