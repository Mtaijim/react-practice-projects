import React, { useEffect, useState } from "react";

const App = () => {
  function Square({ onClick, value }) {
    return (
      <button onClick={onClick} className="square">
        {" "}
        {value}
      </button>
    );
  }

  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, SetIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function winner(square) {
    const WinnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (let i = 0; i < WinnerPatterns.length; i++) {
      const [x, y, z] = WinnerPatterns[i];
      if (square[x] && square[x] === square[y] && square[z] === square[x]) {
        return square[x];
      }
    }
    return null;
  }
  function handleClick(getCurrentSquare) {
    let Cpysquare = [...square];
    if (winner(Cpysquare) || Cpysquare[getCurrentSquare]) return;
    Cpysquare[getCurrentSquare] = isXTurn ? "X" : "O";
    SetIsXTurn(!isXTurn);
    setSquare(Cpysquare);
  }
  function handleRestart() {
    setSquare(Array(9).fill(""));
    SetIsXTurn(true);
    setStatus("");
  }

  useEffect(() => {
    if (!winner(square) && square.every((item) => item !== "")) {
      setStatus(`"It's a draw! Please restart the game." `);
    } else if (winner(square)) {
      setStatus(`winner is ${winner(square)} please restart game `);
    } else {
      setStatus(`next player is : ${isXTurn ? "x" : "O"}`);
    }
  }, [square, isXTurn]);

  return (
    <div>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square value={square[0]} onClick={() => handleClick(0)} />
          <Square value={square[1]} onClick={() => handleClick(1)} />
          <Square value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={square[3]} onClick={() => handleClick(3)} />
          <Square value={square[4]} onClick={() => handleClick(4)} />
          <Square value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={square[6]} onClick={() => handleClick(6)} />
          <Square value={square[7]} onClick={() => handleClick(7)} />
          <Square value={square[8]} onClick={() => handleClick(8)} />
        </div>
        <h2>{status}</h2>
        <div>
          <button className="btn" onClick={handleRestart}>
            {" "}
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
