import { useState } from "react";
import "./Board.css";

function Board({ colors }) {
  let [count, setCount] = useState(0);

  let inCount = () => {
    let newCount = count+=1;
    setCount(newCount);
  };

  let styles =
    colors == "Yellow" 
      ? { backgroundColor: colors, color: "black" }
      : { backgroundColor: colors, color: "white" };

  return (
    <>
      <h2>
        {colors} Moves: {count}
      </h2>
      <button onClick={inCount} style={styles}>
        +1
      </button>
    </>
  );
}

export default Board;
