import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

function Lottery({n=3, winCondition}) {
  let [Num, setNum] = useState(genTicket(n));
  let isWinning = winCondition(Num);

  let random = () => {
    setNum(genTicket(n));
  };

  return (
    <>
      <h1>Lottery Game!</h1>
      <Ticket ticket={Num} />

      <h2>{isWinning && "Congratuations, You won Lottery!!"}</h2>
      <Button action={random}/>
    
    </>
  );
}

export default Lottery;
