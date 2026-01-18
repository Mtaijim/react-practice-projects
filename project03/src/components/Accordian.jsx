import React, { useState } from "react";
import Data from "./Data";
const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [EnableMultiSelection, SetEnableMultiSelection] = useState(false);
  const [Multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setselected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    setMultiple((preselected) => {
      if (preselected.includes(getCurrentId)) {
        return preselected.filter((item) => item !== getCurrentId);
      } else {
        return [...preselected, getCurrentId];
      }
    });
  }

  return (
    <div>
      <div className="wrapper">
        <button
          className="btn"
          onClick={() => SetEnableMultiSelection(!EnableMultiSelection)}
        >
          Enable Multi selection{" "}
        </button>
        <div className="accordian">
          {Data && Data.length > 0 ? (
            Data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    EnableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.title}</h3>
                  <span className="toggle">
                    {EnableMultiSelection
                      ? Multiple.includes(dataItem.id)
                        ? "-"
                        : "+"
                      : selected === dataItem.id
                      ? "-"
                      : "+"}
                  </span>
                </div>
                {EnableMultiSelection
                  ? Multiple.includes(dataItem.id) && (
                      <div className="content">{dataItem.content}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.content}</div>
                    )}
              </div>
            ))
          ) : (
            <div> No data found !</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
