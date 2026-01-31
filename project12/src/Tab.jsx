import React, { useState } from "react";

const Tab = ({ tabContent, onChange }) => {
  const [currentTabINdex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getcurrentIndex) {
    setCurrentTabIndex(getcurrentIndex);
    onChange(getcurrentIndex);
  }
  return (
    <div className="container ">
      <div className="heading">
        {tabContent.map((item, index) => (
          <div onClick={() => handleOnClick(index)} key={item.label}>
            <span className={currentTabINdex == index ? "active" : "label"}>
              {" "}
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "blue" }}>
        {tabContent[currentTabINdex] && tabContent[currentTabINdex].content}
      </div>
    </div>
  );
};

export default Tab;
