import React from "react";

const Suggestion = ({ data, onclick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={() => onclick(item)}>
              {" "}
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestion;
