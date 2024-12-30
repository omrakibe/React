import { useState } from "react";
import "./Board.css";
function Board() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  let updateBlue = () => {
    setMoves((prevMove) => {
        return  ({...prevMove, blue: prevMove.blue + 1 });
    });
  };
  return (
    <>
      <p>Game begins!</p>
      <div>
        <p>Blue Moves: {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Yellow Moves: </p>
        <button style={{ backgroundColor: "Yellow" }}>+1</button>
        <p>Green Moves: </p>
        <button style={{ backgroundColor: "Green", color: "white" }}>+1</button>
        <p>Red Moves: </p>
        <button style={{ backgroundColor: "Red", color: "white" }}>+1</button>
      </div>
    </>
  );
}

export default Board;
