import React from "react";
import { useState } from "react";
import { QRCode } from "react-qr-code";

const App = () => {
  const [input, setinput] = useState("");
  const [qrcode, setqrcode] = useState("");
  function handleqrcode() {
    setqrcode(input);
  }
  return (
    <div>
      <h1> qr code Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your value "
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleqrcode}
        >
          {" "}
          Generate
        </button>
      </div>
      <QRCode value={qrcode} size={400} bgColor="#ffff" />
    </div>
  );
};

export default App;
