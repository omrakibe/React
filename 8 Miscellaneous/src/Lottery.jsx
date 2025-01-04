import { useState } from "react";

function Lottery() {
  let [Num, setNum] = useState([0, 0, 0]);
  
  return (
    <>
      <h1>A Lottery Game</h1>
      <h3>Lottery Ticket Number = {`${Num[0]}${Num[1]}${Num[2]}`}</h3>
      <button >Generate New Ticket</button>
    </>
  );
}

export default Lottery;
