import React from "react";

const Model = ({ id, header, body, footer, onclose }) => {
  return (
    <div id={id || "Model"} className="model">
      <div className="container">
        <div className="header">
          <span className=" close-popup" onClick={onclose}>
            {" "}
            &times;
          </span>
          <h2>{header ? header : "  THIS IS HEADER"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              {" "}
              <p> This is body </p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>This is my Footer </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
